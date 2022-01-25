import React from "react";

import Son from "./Son";

export default props => {

  return (

    <div>
      <h1>{props.name} {props.surname}
      </h1>
      <h2>Son's</h2>
      <ul>
        <Son name='Jorge' surname={props.surname}/>
        <Son {...props}/>
        <Son {...props} name='Carla'/>
        <Son name='Juca' {...props}/>
      </ul>
    </div>

  );

}