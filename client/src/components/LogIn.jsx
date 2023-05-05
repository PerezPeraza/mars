import {  useContext, useState } from "react";
import { logIn } from "../utilities";
import { UserContext } from "../App";
import { currUser, logOut } from "../utilities"

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)


  return (
    <>
    <form className="title"
      onSubmit={(e) => [
        e.preventDefault(),
        logIn(email, password, setUser),
        setEmail(""),
        setPassword(""),
      ]}
    >
      <h3>Log In / Log Out</h3>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Log In" />
      <button onClick={()=>logOut(setUser)}>Log Out</button>
    </form>
    {/* <div className="title">
      
      <button onClick={()=>logOut(setUser)}>Log Out</button>
      </div> */}
    </>
  );
};