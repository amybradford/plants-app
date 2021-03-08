import React, { useEffect, useState } from 'react';
import Header from './Header';
import firebase from './firebase';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {      
    const plantObject = response.val().plants;
    setPlants(plantObject); 
    })
  }, [])
  // when user selected yes or no, randomly generate one plant and display to the page
  // add event listener to button and on submit either petSafePlants or toxicPlants will be chosen
  // use prop to add value to app.js

  // created a new state for the chosen plant that would show on the page
  const [chosenPlant, setChosenPlant] = useState({});
  const generatePlant = (userInput) => {
    // create a variable to show the max number of plants in the object
    const maxNumberOfPlants = Object.keys(plants[userInput]).length
    // create a variable to generate a random number between 1 and 5
    const randomPlant = Math.floor(Math.random() * maxNumberOfPlants);
    // create a variable to show the name of a random plant
    const randomKey = Object.keys(plants[userInput])[randomPlant];
    // create a variable to show the contents of a random plant object
    const newPlant = (plants[userInput][randomKey]);
    setChosenPlant(newPlant);
  }
       
  return (
    <div className="App">
      <Header />
      <h2>Find a suitable indoor plant for your apartment</h2>
      <Form generatePlant={generatePlant}/> 
      <div>
        <h2>{chosenPlant.name}</h2>
        <h3>Sunlight: {chosenPlant.light}</h3>                   
        <h3>Water: {chosenPlant.water}</h3>
        <h3>Temp: {chosenPlant.temperature}</h3>
        <h3>Fact: {chosenPlant.fact}</h3>
      </div>
      <Footer />    
    </div>
        
  );
}
export default App;
