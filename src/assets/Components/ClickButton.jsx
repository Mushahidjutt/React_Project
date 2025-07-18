import React, { useState } from "react";

const ClickButton = () => {
  const [click, Setclick] = useState("");

  const clickhogya = () => {
    Setclick("Click Hogya");
  };
  return (
    <div>
      <h1>This Button show , I am Clicked OR Not</h1>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-6"
        onClick={clickhogya}
      >
        Click Me{" "}
      </button>

      <p className="mt-4 mb-4"> {click}</p>
    </div>
  );
};

export default ClickButton;
