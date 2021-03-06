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
      // should return an object that has parsed the databse info
      console.log(response.val());
    })
  }, [])
     
  return (
    <div className="App">
      <ul>
        {plants.map((plant) => {
          return (
            <li>
              <p>{plant}</p>
            </li>
          )
        })}
      </ul>
      <Header />
      <Form /> 
      <Footer />    
    </div>
        
  );
}
export default App;
