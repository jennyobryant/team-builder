import React, {useState} from 'react'; 

const Form = props => {

const [member, setMember] = useState ({//1. build inputs
    name: "",
    email: "",
    role: ""
}); 

const handleTextChange = (event) => {
    setMember ({...member, [event.target.name]: event.target.value})//creating new objects based on target value for name (...)
}



    return (
        <form>
            <input type = "text"/>
        </form>
    ); 
}; 

export default Form; 