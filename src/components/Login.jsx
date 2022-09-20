import React,{useState} from "react";
import "./Login.css";
import users from "../local-json/users";

function Login() {
    
    const inputRef = React.useRef(null);
    const passRef = React.useRef(null);

    // console.table(users);
    const handleClick = ()=>{
        console.log(inputRef.current.value);
        console.log(passRef.current.value);
        for(let i=0; i<users.length; i++){
          if(inputRef.current.value === users[i].username){
            if(passRef.current.value === users[i].password){
              console.log(true);
            }
          }
        }
    }
  return (
    <>
      <div className="login">
        <div className="form">
          <form className="login-form">
            <span className="material-icons">Lock</span>
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
