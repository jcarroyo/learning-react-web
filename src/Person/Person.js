/*import React, { Component } from "react";
import Radium from "radium";

import "./Person.css";

const person = props => {
  const style = {
    ":@media (min-width: 500px)": {
      width: "450px"
    }
  };

  return (
    <div className="Person" style={style}>
      <p>
        Mi nombre es {props.name} y tengo {props.age} años
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
      <input type="button" onClick={props.click} value="Eliminar" />
    </div>
  );
};

export default Radium(person);
*/

import React, { Component } from "react";

import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p>
        Mi nombre es {props.name} y tengo {props.age} años
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
      <input type="button" onClick={props.click} value="Eliminar" />
    </div>
  );
};

export default person;
