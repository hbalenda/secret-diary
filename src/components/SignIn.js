import React from 'react';
import base from '../base';

class SignIn extends React.Component {
  constructor() {
    super();
  };
  componentWillMount() {
    this.ref = base.syncState(`/users`, {
      context: this,
      state: 'users'
    })
  }

  authenticateUser(name, password) {
    Object.keys(this.props.users).map(key => {
      if(this.props.users[key].name === name) {
        if(this.props.users[key].password === password) {
          this.props.logIn(this.props.users[key]);
        } else {
          console.log("Wrong password")
        }
      } else {
        console.log("Couldn't Find User");
      }
    })
  }
  submitUserValues(event) {
    event.preventDefault();
    const name = this.name.value;
    const password = this.password.value;
    this.authenticateUser(name, password);
  }

  render() {
    return (
      <form className="sign-in" onSubmit={(e) => this.submitUserValues(e)}>
        <input ref={(input) => this.name = input} type="text"/>
        <input ref={(input) => this.password = input} type="password"/>
        <button type="submit">Enter</button>
      </form>
    )
  }
}

export default SignIn;
