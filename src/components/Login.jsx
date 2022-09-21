import React,{useState} from "react";
import "./Login.css";
import users from "../local-json/users";

function Login({logg}) {
    const [status, setStatus] = useState(true);
    const inputRef = React.useRef(null);
    const passRef = React.useRef(null);

    // console.table(users);
    const handleClick = (e)=>{
      e.preventDefault();
        console.log(inputRef.current.value);
        console.log(passRef.current.value);
        for(let i=0; i<users.length; i++){
          const {username,password} = users[i];
          if(inputRef.current.value === username){
            if(passRef.current.value === password){
              logg(true);
              return;
            }
            setStatus(false);
          }
          setStatus(false);
        }
    }
    console.log(status);
  return (
    <>
      <div className="login">
        <div className="form">
          <form className="login-form">
            <span className="material-icons">Lock</span>
          {(!status)? <p style={{"color":"red"}}>Please enter right credentials...</p>:""} 
            <input
              type="text"
              placeholder="Username"
              required
              ref={inputRef}
            />
            <input 
            type="password"
            ref={passRef} 
            placeholder="password" 
            required />
            <button onClick={handleClick}>login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
