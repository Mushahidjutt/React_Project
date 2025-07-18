import React, { useState } from "react";

function ConditionalRendring() {
  const [name, setName] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const handleinputchange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    setShowMsg(true);
  };

  return (
    <div>
      <h1>Conditinal Rendring </h1>

      <p>Enter Your Name </p>
      <input
        className="border-2 bg-blue-100"
        type="text"
        value={name}
        onChange={handleinputchange}
      />

      <button
        className="ml-2 px-4 py-1 bg-blue-500 text-white rounded"
        onClick={handleClick}
      >
        Show Name{" "}
      </button>

      {showMsg ? (
        name.trim() !== "" ? (
          <p> Wellcome {name}! </p>
        ) : (
          <p> Please enter Your Name </p>
        )
      ) : null}
    </div>
  );
}

export default ConditionalRendring;
