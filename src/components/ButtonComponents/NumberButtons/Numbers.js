import React from "react";
import {numbers} from '../../../data';
import NumberButton from './NumberButton';


//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  // const [numberState, setNumberState] = useState(numbers);
  return (
    
    <div class='numbersButtons'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numbers.map((key) =><NumberButton numbers = {key}/>)
       }
    </div>
  );
};

export default Numbers;

// const numbersButtons = document.querySelector('.numbersButtons')
// console.log(Numbers().props.children[0].props.numbers)



