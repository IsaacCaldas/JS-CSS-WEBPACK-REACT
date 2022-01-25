import React from "react";

export default props => {

  return (

    <div>
      Good morning <b>{props.name}</b>. <br/>
      You have <b>{props.age}</b> years old.
    </div>

  );

}