import React, { Component } from "react";
import styles from "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super();
    console.log("[App.js] Inside constructor", props);

    this.state = {
      persons: [
        { id: 1, name: "Max", age: 28 },
        { id: 2, name: "El xin", age: 30 },
        { id: 3, name: "Manu", age: 29 }
      ],
      showPersons: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componendWillMount");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount");
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex],
      name: event.target.value
    };
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons
    }));
  };

  shouldComponentUpdate(nextProps, nextState) {
    //performance here...
    return true;
  }

  renderPeople = () => {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            nameChangedHandler={this.nameChangedHandler}
          />
        </div>
      );
    }
    return persons;
  };

  render() {
    console.log("[App.js] Inside render");
    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          title={this.props.title}
          togglePersonHandler={this.togglePersonHandler}
        />
        <div>{this.renderPeople()}</div>
      </div>
    );
  }
}

export default App;
