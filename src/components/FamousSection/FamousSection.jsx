import React, { useState, useEffect } from 'react';
import './FamousSection.css';
import axios from 'axios';
// import FormSubmit from '../FamousPers  onForm/FamousPersonForm'

function FamousSection() {
  let [famousPersonName, setPersonName] = useState('');
  let [famousPersonRole, setPersonRole] = useState('');
  let [famousPeopleArray, setPeopleArray] = useState([]);


  useEffect(() => { 
    fetchPeople()
    
  }, [])
//-------------------------------------------------------------------------------------------------------------------
//      GET

  const fetchPeople = () => {
    console.log('inside of fetchPeople')
    axios.get('/people')
    .then((response) =>{
      console.log('this is the response', response.data)
      setPeopleArray(response.data) 
    }).catch((error) => {
      console.log('Error GET /famous_people', error)
    })
    
    
  }
//-------------------------------------------------------------------------------------------------------------------
  const addPerson = (evt) => {
    evt.preventDefault();
    console.log(`The person is ${famousPersonName} and they're famous for ${famousPersonRole}`);
    
    axios.post('/people', {name: famousPersonName, role: famousPersonRole}
    ).then((response) => {
      console.log(response);
      fetchPeople()
    }).catch((error) => {
      console.log('Error POST /people')
    })
    setPersonName('')
    setPersonRole('')
    

  //-------------------------------------------------------------------------------------------------------------------
  
  }
  
    return (
      <section className="new-person-section">
        <form onSubmit={addPerson}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" value={famousPersonName} onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" value={famousPersonRole} onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
          
        </form>
        {/* {FormSubmit()} */}
        <p>
          {famousPersonName} is famous for "{famousPersonRole}".
        </p>
        <ul>
        {famousPeopleArray?.map(person => (
          <li key={person.id}>
            {person.name} is famous for {person.role}
          </li>
        ))}
        
        </ul>
      </section>
    );
    
}

export default FamousSection;
//-------------------------------------------------------------------------------------------------------------------


// - a FamousPersonForm (to add a new person)
// - a FamousPersonList (to display each person in the database)
// - a FamousPerson (to display a single famous person's info as *'Felicia Day is famous for "The Guild".* (Use this inside of the FamousPersonList component.)