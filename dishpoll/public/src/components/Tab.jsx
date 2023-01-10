import React,{useState} from 'react';
import ApiFetch from './ApiFetch';
import Login from './Login';
import Rating from './Rating';

function Tab() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [change, setChange] = useState(true);
  const logg = () =>{
    setLoggedIn(true);
  }
  return (
    <div>
       {(loggedIn)?<>
        <div className='h-20 flex flex-row bg-slate-500 justify-between'>
        <div className="md:text-4xl ml-20 p-4 cursor-pointer text-white" onClick={()=>setChange(true)}>Food Items </div>
            <img src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" alt="icons" className='h-20 relative'/>
        <div className="md:text-4xl mr-20 p-4 pr-20 cursor-pointer text-white" onClick={()=>setChange(false)}>Rating</div>
    </div>
        {(change)?<ApiFetch/>:<Rating/>}lk
       </>: <Login logg={logg}/>}
    </div>
  )
}

export default Tab;