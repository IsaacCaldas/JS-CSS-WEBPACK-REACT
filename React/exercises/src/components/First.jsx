import React from "react";

import GoodMorning from "./GoodMorning";
import GoodAfternoon, { /* GoodAfternoon */ GoodNight } from './Multiples'
import Salutation from "./Salutation";
import Dad from "./Dad";
// or 
// export default () => <h1>First</h1> 
export default function(){
  return (

    <div>
      <div>
        <Dad name="José" surname="Almeida"/>
      </div>
      <Salutation type='Number' name='John Doe'/>
      <GoodMorning name='Isaac' age={18}/>
      <GoodAfternoon name='Fulano' />
      <GoodNight name='Beltrano' />
    </div>
    
  );
}
