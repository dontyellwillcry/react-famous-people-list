import { useState } from "react";



function FormSubmit() {
    let [famousPersonName, setPersonName] = useState('');
    let [famousPersonRole, setPersonRole] = useState('');
    
    <form onSubmit={}>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" onChange={e => setPersonName(e.target.value)} />
          <label htmlFor="role-input">Famous for:</label>
          <input id="role-input" onChange={e => setPersonRole(e.target.value)} />
          <button type="submit">Done</button>
    </form>
}   


export default FormSubmit;