import React, {useState} from 'react'; 


const Form = props => {
    const initialState = {
        name: "",
        email: "",
        role: ""
    }; 

const [member, setMember] = useState ({//1. build inputs
    name: "",
    email: "",
    role: ""
}); 

const resetForm = () => {
    setMember(initialState);
  };
const handleChange = (event) => {
    setMember ({...member, [event.target.name]: event.target.value})//creating new objects based on target value for name (...)
}

const handleSubmit = event => {
    event.preventDefault(); 

    if (!member.name || !member.role || !member.email){
        alert ('Please fill out all fields!'); 
    } else {
        props.setMembers([member, ...props.members]); 
        resetForm(); 
    }
}; 
return (
     <form onSubmit ={handleSubmit}>
         <div className ="item-container">
             
                 <label>
                     Name: 
                     <input type ="text" />
                 </label>
             
             
             
                 <label>
                     Role: 
                     <input type ='text'/>
                    
                 </label>
           

             
                 <label>
                     Email: 
                     <input type ="email" required />

                 </label>
             
             <button>Submit</button>
         </div>
        </form>
    ); 
}; 

//var x = [1, 2, 3];
//var y = [...x, 4]; // [1, 2, 3, 4]
//var y = [x, 4]; // [[1, 2, 3], 4]



export default Form;