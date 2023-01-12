import React from 'react';
import add , {sub, div ,mult} from './Calc';

function App() {
  return (
    <>
      <h2>Hello I am learning React Js to be a FRONTEND CHAMP</h2>
      <hr></hr>
      <h3>Calculator App</h3>
    <ul>
        <li>Add of two number is {add(4,9)}</li>
        <li>Sub of two number is {sub(7,3)} </li>
        <li>Div of two number is {div(20,2)}</li>
        <li>Mult of two number is {mult(3,10)}</li>
    </ul>
  </>
   
  );
}

export default App ;
