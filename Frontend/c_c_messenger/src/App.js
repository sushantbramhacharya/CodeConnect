import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState({});

  useEffect(()=>{
    fetch("http://localhost/Codeconnect/messages/index.php",{
      method: "GET",
      credentials: "include", // Include cookies in the request
    })
    .then(resp=>resp.json())
    .then((data)=>{
      setUser(data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[
    //Params
  ])

  return (<div className="container">
    <h1 className="header-text">WELCOME TO CODE CONNECT MESSENGER,{user.name} <a href="http://localhost/codeconnect">BACK TO Code Connect</a> </h1>
    <div className="row">
      <Sidebar/>
      <Chat/>
    </div>
  </div>)
  ;
  }
export default App;
