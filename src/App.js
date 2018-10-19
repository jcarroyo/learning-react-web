import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "El xin", age: 30 },
      { id: 3, name: "Manu", age: 29 }
    ],
    showPersons: false
  };

  title = "el wey";

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
    /*this.setState(prevState => ({
      persons: prevState.persons.splice(personIndex, 1)
    }));*/
  };

  togglePersonHandler = () => {
    this.setState(prevState => ({
      showPersons: !prevState.showPersons
    }));
  };

  renderPeople = () => {
    /*return this.state.showPersons
      ? this.state.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={this.namedChangedHandler}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}
            />
          );
        })
      : null;*/
    if (this.state.showPersons) {
      return this.state.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(index)}
            changed={this.namedChangedHandler}
            key={person.id}
            changed={event => this.nameChangedHandler(event, person.id)}
          />
        );
      });
    }
    return null;
  };

  applyFormatParagraph = () => {
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return classes.join(" ");
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solit blue",
      padding: "8px",
      cursor: "pointer"
    };

    if (this.state.showPersons) {
      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black"
      };
    }

    //let classes = ["red", "bold"].join(" ");
    let classes = this.applyFormatParagraph();

    return (
      <div className="App">
        <h1>{this.title}</h1>
        <p className={classes}>This is really working!!!</p>
        <button onClick={this.togglePersonHandler} style={style}>
          Toggle persons
        </button>
        <div>{this.renderPeople()}</div>
      </div>
    );
  }
}

export default App;
