import React, { useState } from 'react';

function Form(props) {
  // created a new state for the user selection on form element
  const [userInput, setUserInput] = useState('');
  //created a function to generate the userinput choice on submit
  //added preventDefault so the page doesn't reload
  const handleSubmit = (e) => {
    e.preventDefault();
    props.generatePlant(userInput);
  }
  //created a function to target the userinput state when selected
  const handleChange = (e) => {
    setUserInput(e.target.value)
    
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} action="">
        <p>Do you have any pets?</p>
        <div>
          <input type="radio" id="yesPets" name="select" value="petSafePlants" onChange={handleChange}/>
          <label htmlFor="pets">Yes</label>
          <input type="radio" id="noPets" name="select" value="toxicPlants" onChange={handleChange}/>
          <label htmlFor="petsNo">No</label>
        </div>
        <div>
          <button>Click here for a plant</button>
        </div>
      </form>      
    </div>
  );
}

export default Form;
