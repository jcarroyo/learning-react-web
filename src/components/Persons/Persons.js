import React, { PureComponent } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super();
    console.log("[Persons.js] Inside constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componendWillMount");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount");
  }

  render() {
    console.log("[Persons.js] Inside render");
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.deletePersonHandler(index)}
            changed={event => this.props.nameChangedHandler(event, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
