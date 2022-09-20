import React from "react";
import "./Login.css";
function Login() {
    const inputRef = React.useRef(null);
    const passRef = React.useRef(null);

    const handleClick = ()=>{
        console.log(inputRef.current.value);
        console.log(passRef.current.value);
    }
  return (
    <>
      <div className="login">
        <div className="form">
          <form className="login-form">
            <span className="material-icons">Lock</span>
            <input
              type="text"
              placeholder="email"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
