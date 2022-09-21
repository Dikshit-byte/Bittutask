import React,{useState} from 'react'
import ApiFetch from './components/ApiFetch'
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const logg = () =>{
    setLoggedIn(true);
  }
  return (
    <>
       {(loggedIn)?<ApiFetch/> : <Login logg={logg}/>}
    </>
  )
}

export default App;