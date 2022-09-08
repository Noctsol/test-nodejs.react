import React from 'react';
import logo from './logo.svg';
import './App.css';

// Different data types
let myvar= "yolo123";
let age: number;
let isStuden:boolean;
let hobbies:string[];
let ages: number[];
let role: [number, string];
let ArrayOfTuples: [number, string][];
let objThatisStringAndInt: number | string

let unknType: unknown;

age = 5;

type Person= {
  name: string;
  age?: number;
  something?: 4

}

let somePerson: Person = {
  name: "someguy"
}

let lotOfPersons: Person[];


// Function Examples
// let print: (msg:string) => void;
function print(msg:string) {
  console.log(msg);
}
print("hello")

interface IThing {
  prop1:string
}

type Thing = IThing & {
  yo: string
}


type combinedA = {
  A: number;
}
type combinedB = combinedA &{
  B: string
}

let cB: combinedB = {
    A: 2,
    B: "hello"
}


function App() {
  return (
    <div className="App">
      <div>
        hello
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
