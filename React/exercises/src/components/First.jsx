import React from "react";

import GoodMorning from "./GoodMorning";
import GoodAfternoon, { /* GoodAfternoon */ GoodNight } from './Multiples'

// or 
// export default () => <h1>First</h1> 
export default function(){
  return (

    <div>
      <GoodMorning name='Isaac' age={18}/>
      <GoodAfternoon name='Fulano' />
      <GoodNight name='Beltrano' />
    </div>
    
  );
}
