import { createContext, useEffect, useState } from "react";
import "./App.css";
import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/LogIn";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);
  getToken()
  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);



  return (
    <div className="App">
      <h1 className="title">Welcome {user && user.name}</h1>
      <NavBar />

      <UserContext.Provider value={{user, setUser}} >
        <Outlet />
      </UserContext.Provider>
      <div className="title">
      <button onClick={()=>logOut(setUser)}>Log Out</button>
      </div>
    </div>
  );
}

export default App;