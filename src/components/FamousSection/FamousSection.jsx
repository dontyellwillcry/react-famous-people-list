import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);


  useEffect(() => { // useEffect will load fetchPeople from the very start.
    fetchPeople()
  }, [])
  // TODO: on load, call the fetchPeople() function (added useEffect/Finished)
//-------------------------------------------------------------------------------------------------------------------
//      GET

  const fetchPeople = () => {
    // TODO: fetch the list of people from the server (FINISHED)
    console.log('inside of fetchPeople')
    axios.get('/people')
    .then((response) =>{
      console.log('this is the response', response.data)
      setPeopleArray(response.data) //will update our famousPeopleArray with what we GET from database
    }).catch((error) => {
      console.log('Error GET /famous_people', error)
    })
    
  }
//-------------------------------------------------------------------------------------------------------------------
  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    // TODO: create POST request to add this new person to the database
    axios.post('/people', {name: famousPersonName, role: famousPersonRole}
    ).then((response) => {
      console.log(response);
      fetchPeople()
    }).catch((error) => {
      console.log('Error POST /people')
    })

    // HINT: the server is expecting a person object 
    //       with a `name` and a `role` property
  
  }

    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
        </form>
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
          {famousPeopleArray}
        </ul>
      </section>
    );
}

export default FamousSection;
