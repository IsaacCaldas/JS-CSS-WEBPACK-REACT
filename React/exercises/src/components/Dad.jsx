import React from "react";
import { childrenWithProps } from "../utils/utils";

export default props => {

  return (

    <div>
      <h1>{props.name} {props.surname}
      </h1>
      <h2>Son's</h2>
      <ul>
        {childrenWithProps(props)}
      </ul>
    </div>

  );

}