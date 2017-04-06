import React from 'react';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="sign-in">
        <input type="text"/>
        <input type="password"/>
        <button type="submit">Enter</button>
      </div>
    )
  }
}

export default SignIn;
