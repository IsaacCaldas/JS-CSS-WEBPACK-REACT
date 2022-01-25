import React from "react";

import GoodMorning from "./GoodMorning";
import GoodAfternoon, { /* GoodAfternoon */ GoodNight } from './Multiples'
import Salutation from "./Salutation";
import Dad from "./Dad";
import Son from "./Son";
// or 
// export default () => <h1>First</h1> 
export default function(){
  return (

    <div>
      <div>
        <Dad name="José" surname="Almeida">
          <Son name='Juca' />
          <Son name='Júlia' />
          <Son name='Jamaica' />
          <Son name='Jasmim' />
        </Dad>
      </div>
      <Salutation type='Number' name='John Doe'/>
      <GoodMorning name='Isaac' age={18}/>
      <GoodAfternoon name='Fulano' />
      <GoodNight name='Beltrano' />
    </div>
    
  );
}
