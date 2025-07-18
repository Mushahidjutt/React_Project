import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";


import Button from "./Button";
import test from "./test";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [displayText,setDisplayText] =useState("");


  const enterData= ()=>{

    setDisplayText(text);
    setText(" ");

    
    
    
  }

  return (
    <>
      <div className="App h-screen bg-gradient-to-r from-purple-400 via-pink-300">
        <div className="flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className=" text-3xl font-bold p-8"> Counter </h1>
           <test/>
            <p>Count is : {count}</p>

            <Button
              onClick={() => setCount(count + 1)}
              label={"Add"}
              customClasses="bg-green-500"
            />
            <Button
              onClick={() => setCount(count * 2)}
              label={"Add 2 Multilpile"}
              customClasses="bg-yellow-500"
            />

            <Button
              onClick={() => setCount(count * 0)}
              label={"Reset"}
              customClasses="bg-red-500"
            />

            <div className="font-bold text-3xl mt-8">Text Show in Field </div>

            <div>
              <h1 className="font-bold">Enter Sentence to view </h1>
              <input className="border-2 bg-blue-100" type="text" value={text} 
              onChange={(e)=>setText(e.target.value)}
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-4" onClick={enterData}>Add</button>

              <h1> You Write : {displayText} </h1>
            </div>

      

            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 " onClick={() => setCount(count + 1)}>Add </button> */}
          </div>




         
        <test/>


          
        </div>
      </div>
    </>
  );
}

export default App;
