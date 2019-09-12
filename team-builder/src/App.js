import React, {useState} from 'react'; //1. import useState
import logo from './logo.svg';
import './App.css';
import Form from './Form.js'; 

function App() {
  const [members, setMembers] = useState([{
    name: "jenny", 
    email: "jennyobryant@protonmail.com",
    role: "UI developer"
  },
  {
    name: "jacob",
    email:"jacobobryant@protonmai.com",
    role: "backend developer"
  }
]); //2. give state variable
  return ( //3. render the list of team members
    <div className="App">

    {members.map(member =>
    <div>
      <div>{member.name}</div>
      <div>{member.email}</div>
      <div>{member.role}</div>
    </div>

    )}

<Form members={members} setMembers={setMembers} />


{

    //  <header className="App-header">
     //   <img src={logo} className="App-logo" alt="logo" />
      //  <p>
      //    Edit <code>src/App.js</code> and save to reload.
      //  </p>
       // <a
         // className="App-link"
         // href="https://reactjs.org"
         // target="_blank"
         // rel="noopener noreferrer"
       // >
         // Learn React
       // </a>
     // </header>
}
    </div>
  );
}

export default App;
