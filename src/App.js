import React, { useEffect, useState } from 'react';
import Header from './Header';
import firebase from './firebase';
import Form from './Form';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faThermometerHalf } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';


function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {      
    const plantObject = response.val().plants;
    setPlants(plantObject); 
    })
  }, [])
  // created a new state for the chosen plant that would show on the page
  const [chosenPlant, setChosenPlant] = useState({});
  // created another new state to track changes of randomPlant
  const [randomPlant, setRandomPlant] = useState(0);

  const randomNumber = (maxNumberOfPlants) => {
    return Math.floor(Math.random() * maxNumberOfPlants);
  }

  const generatePlant = (userInput) => {
    // create a variable to show the max number of plants in the object
    const maxNumberOfPlants = Object.keys(plants[userInput]).length;
    // created a while loop so that the same plant wasn't randomly chosen in succession
    let newRandomNumber = randomNumber(maxNumberOfPlants);  
    while (newRandomNumber === randomPlant) {
      newRandomNumber = randomNumber(maxNumberOfPlants);
    } 
    setRandomPlant(newRandomNumber); 
    // create a variable to show the name of a random plant
    const randomKey = Object.keys(plants[userInput])[randomPlant];
    // create a variable to show the contents of a random plant object
    const newPlant = (plants[userInput][randomKey]);
    setChosenPlant(newPlant);
    // console.log(newPlant);    
  }  

  return (
    <div className="App">
      <Header /> 
      <div className="plantContent">
        <Form generatePlant={generatePlant}/> 
        <div className="dynamicContent">
          {(chosenPlant.url)
          ? <img className="plantImage" 
          src={chosenPlant.url} alt={chosenPlant.alt}/>
          : null}
          <h2>{chosenPlant.name}</h2>                 
            <h3>{(chosenPlant.light)
            ? <FontAwesomeIcon icon={faSun} className="sun icon"/> 
            : null}
            {chosenPlant.light}          
            </h3>                   
            <h3> {(chosenPlant.water)
            ? <FontAwesomeIcon icon={faTint} className="water icon"/>
            : null} 
            {chosenPlant.water}</h3>
            <h3> {(chosenPlant.temperature)
            ? <FontAwesomeIcon icon={faThermometerHalf} className="temp icon"/>
            : null}  
            {chosenPlant.temperature}</h3>          
            <h3> {(chosenPlant.fact)
            ? <FontAwesomeIcon icon={faLeaf} className="fact icon"/>
            : null}  
            {chosenPlant.fact}</h3>
        </div>        
      </div>
        <Footer /> 
    </div>
        
  );
}
export default App;
