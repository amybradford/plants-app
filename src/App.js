import React, { useEffect, useState } from 'react';
import Header from './Header';
import firebase from './firebase';
import Form from './Form';
import Footer from './Footer';

function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    // create a variable that holds a reference to firebase database
    const dbRef = firebase.database().ref();
    // add an event listener so that it notes everytime there's a change in the database
    dbRef.on('value', (response) => {      
      // should return an object that has parsed the database info
      // create a variable to store object data
      const plantObject = response.val().plants;
      console.log(plantObject)
    setPlants(plantObject); 
    })
  }, [])

  // when user selected yes or no, randomly generate one plant and display to the page
  // add event listener to button and on submit either petSafePlants or toxicPlants will be chosen
  // use prop to add value to app.js

  const generatePlant = (userInput) => {
    console.log(userInput)
    console.log(plants[userInput])
  }
     
  return (
    <div className="App">
      <Header />
      <h2>Find a suitable plant for your apartment</h2>
      <Form generatePlant={generatePlant}/> 
      <ul>
        {/* {plants.map((plant) => {
          return (
            <li>
              <p>{plant}</p>
            </li>
          )
        })} */}
      </ul>
      <Footer />    
    </div>
        
  );
}
export default App;
