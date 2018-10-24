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

import styles from "./Person.css";

class Person extends Component {
  constructor(props) {
    super();
    console.log("[Person.js] Inside constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componendWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount");
  }

  render() {
    console.log("[Person.js] Inside render");
    return (
      <div className={styles.Person}>
        <p>
          Mi nombre es {this.props.name} y tengo {this.props.age} años
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
        <input type="button" onClick={this.props.click} value="Eliminar" />
      </div>
    );
  }
}

export default Person;
