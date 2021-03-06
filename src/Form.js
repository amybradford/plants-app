function Form() {
  return (
    <div>
      <form action="">
        <p>Do you have any pets?</p>
        <input type="radio" id="yesPets"
     name="yes" value="yes"/>
        <label for="pets">Yes</label>
        <input type="radio" id="noPets"
     name="no" value="no"/>
        <label for="petsNo">No</label>
          <div>
            <button type="submit">Click here for a plant!</button>
          </div>
      </form>      
    </div>
  );
}

export default Form;
 
// need to work on form element
// PLAN: make a radio function - two options YES or NO buttons
// can only select one of them