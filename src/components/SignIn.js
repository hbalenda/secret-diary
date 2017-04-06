import React from 'react';

class SignIn extends React.Component {

  authenticateUser(name, password) {
    var users = this.props.users;
    var logIn = this.props.logIn;
    for(var key of Object.keys(users)) {
      if(users[key].name === name) {
        if(users[key].password === password) {
          logIn(users[key]);
        } else {
          window.alert("Wrong password!");
        }
      }
    }
  }
  submitUserValues(event) {
    event.preventDefault();
    const name = this.name.value;
    const password = this.password.value;
    this.authenticateUser(name, password);
    this.signInForm.reset();
  }

  render() {
    return (
      <form className="sign-in" ref={(input) => this.signInForm = input} onSubmit={(e) => this.submitUserValues(e)}>
        <input ref={(input) => this.name = input} type="text"/>
        <input ref={(input) => this.password = input} type="password"/>
        <button type="submit">Enter</button>
      </form>
    )
  }
}

export default SignIn;
