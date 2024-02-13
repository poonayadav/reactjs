import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [logIn, setLogIn] = useState(false);
  return (
    <>
      <h3>"count:"{count}</h3>
      <h2>I am login {logIn ? "yes" : "no"}</h2>
    </>
  );
}

export default App;
