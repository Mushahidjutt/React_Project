import React from 'react'

const test = () => {

    console.log("Before delay");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000); // 2000ms = 2 seconds

console.log("After delay");




let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Count:", count);
}, 1000);


function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // yahan callback function chal raha hai
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ali", sayBye);

let a="Hello js ";
    console.log(a,"This is console");

  return (
    <div>
      <h1>Hello this is Test File</h1>
    </div>
  )
}

export default test





function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("✅ Data received");
    }, 2000);
  });
}

async function getData() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
