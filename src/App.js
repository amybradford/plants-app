import React from 'react';
import Header from './Header';
import { useEffect, useState } from 'react';
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
      // console.log(response.val().plants.petSafePlants);
      // create a variable to store object data
      const petSafe = response.val().plants.petSafePlants;
      setPlants([])
      // create mockArray to turn object data into array so we can loop through
      const mockArray = [];
      for (const property in petSafe) {
        // console.log(object[property])
        // push values to the page with .push() method
        mockArray.push(petSafe[property])
      } 
     setPlants(mockArray); 
    })
  }, [])
     
  return (
    <div className="App">
      <Header />
      <Form /> 
      <ul>
        {plants.map((plant) => {
          return (
            <li>
              <p>{plant}</p>
            </li>
          )
        })}
      </ul>
      <Footer />    
    </div>
        
  );
}
export default App;
