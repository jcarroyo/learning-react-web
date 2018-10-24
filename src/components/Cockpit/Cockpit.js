import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  let assignedClasses = [];
  let btnClass = props.showPersons ? classes.Red : "";

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  assignedClasses = assignedClasses.join(" ");

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses}>This is really working!!!</p>
      <button onClick={props.togglePersonHandler} className={btnClass}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
