import "./App.css";
import { useState } from "react";

function App() {
  //let count = 5;
  let [count, setCount] = useState(10);
  //const countData = useState(5);
  //console.log("countData >> "countData);
  const incrementNum = () => {
    console.log("increment Number", count);
    count = count + 1;
    setCount(20);
    //document.getElementById("count").innerHTML = count;
  };
  const decrementNum = () => {
    console.log("decrement Number", count);
    count = count - 1;
    document.getElementById("count").innerHTML = count;
  };
  return (
    <div>
      <p>increment/decrement number</p>
      <h3>
        {" "}
        count:<span id="count">{count}</span>
      </h3>
      <div>
        <button onClick={incrementNum}>increment{count}</button>&nbsp;&nbsp;
        <button onClick={decrementNum}>Decrement{count}</button>
      </div>
    </div>
  );
}

export default App;
