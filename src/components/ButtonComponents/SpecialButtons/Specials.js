import React from "react";
import {specials} from '../../../data'
import SpecialButton from './SpecialButton'

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  // const [specialCharState, setSpecialCharState] = useState(specials);

  return (
    <div  class='specialsButtons'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specials.map((key) =><SpecialButton specials = {key}/>)
       }
    </div>
  );
};

export default Specials;
