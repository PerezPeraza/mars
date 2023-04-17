import { useEffect, useState } from "react";
import { signUp } from "../utilities";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    useEffect(()=> {
      console.log(name, email, password)
    }, [name, email, password])

  return (
    <form
      onSubmit={(e) => [
        e.preventDefault(),
        signUp(name, email, password),
        setEmail(""),
        setPassword(""),
        setName(""),
      ]}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h3>Sign Up</h3>
      <div>Name</div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Email</div>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div>Password</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
};