
import './App.css';
import React, { useState } from 'react';

function App() {
  const [values,setValues]= useState({
  firstName:"",
  lastName:"",
  email:"",
  
  });
const handlerFirstNameChange=(event)=>{

setValues({...values,firstName:event.target.value});
}
const handlerLastNameChange=(event)=>{

  setValues({...values,lastName:event.target.value});
  }
  
  const handleEmailInputChange =(event)=>{

    setValues({...values,email:event.target.value});
    }
    const[valid,setvalid]=useState(false);
    const [submitted,setSubmitted]=useState(false);
  const handleSubmit=(event)=>{
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setvalid(true);
    }
    setSubmitted(true);
  }
  

  return (

    
         <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
 {submitted &&valid ? <div className='success-message'>success thank you for registering</div>:null }
         <input 
         onChange={handlerFirstNameChange}
         value={values.firstName} id="first-name" className="form-field" type="text"  placeholder="First Name"   name="firstName" />
      
    
   {submitted && !values.firstName ?<span>please enter your first mame</span> :null}  
        <input
        onChange={handlerLastNameChange}
        value={values.lastName} id="last-name" className="form-field" type="text"  placeholder="Last Name" name="lastName"  />
      {submitted && !values.lastName?<span>please enter your last name</span> :null}  
        <input
        onChange={handleEmailInputChange}
        value={values.email} id="email" className="form-field" type="text" placeholder="Email" name="email"/>
    {submitted &&values.email ?<span>please entere your email</span>:null}
        <button  className="form-field" type="submit">Register </button>
      
      </form>

</div>
  
  );
}

export default App;
