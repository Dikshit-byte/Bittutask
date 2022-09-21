import React,{useState} from 'react'
import ApiFetch from './components/ApiFetch'
import Login from './components/Login';
import Tab from "./components/Tab";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const logg = () =>{
    setLoggedIn(true);
  }
  return (
    <div>
       {(loggedIn)?<>
        <Tab/>
        <ApiFetch/> 
       </>: <Login logg={logg}/>}
    </div>
  )
}

export default App;