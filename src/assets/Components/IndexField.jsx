import React, { useState } from "react";

function IndexField(props) {
  const [text, setText] = useState(" ");
  return (
    <div>
      <input
        className="border-2 bg-blue-100"
        type="text"
        value={text}
       
        onChange={(e) => setText(e.target.value)}
      />


      <h1>You are write This Value : {text}</h1>
    </div>
  );
}

export default IndexField;
