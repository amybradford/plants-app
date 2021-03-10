import React, { useState } from 'react';

function Form(props) {
  const [userInput, setUserInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();    
    if (userInput === '') {
      return 
    } else {  
      props.generatePlant(userInput);  
  }
}
  const handleChange = (e) => {
    setUserInput(e.target.value)
    
  }
  return (
    <div className="formContainer">
      <h2>Find an indoor plant for your apartment</h2>
      <form onSubmit={handleSubmit} action="">
        <p>Do you have any pets?</p>
        <div className="inputStyles">
          <div className="formYes">
            <input type="radio" id="yesPets" name="select" value="petSafePlants" onChange={handleChange}/>
            <label htmlFor="petsYes">Yes</label>
          </div>
          <div className="formNo">
            <input type="radio" id="noPets" name="select" value="toxicPlants" onChange={handleChange}/>
            <label htmlFor="petsNo">No</label>
          </div>
        </div>
        <div>
          <button>Click here for a plant</button>
        </div>
      </form>      
    </div>
  );
}

export default Form;
