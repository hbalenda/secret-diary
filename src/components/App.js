import React from 'react';
import SignIn from './SignIn';
import Message from './Message';
import AddMessageForm from './AddMessageForm';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();
    this.addMessage = this.addMessage.bind(this);
    this.logIn = this.logIn.bind(this);
    this.addUser = this.addUser.bind(this);
    this.state = {
      messages:{},
      isLoggedIn: "",
      users: {},
      user: null,
    };
  }


  componentWillMount(){
    var localStorageLogin = localStorage.getItem('isLoggedIn');
    if (localStorageLogin) {
      this.setState({
        isLoggedIn: true
      })
    }
    var localStorageUser = localStorage.getItem('user');
    if (localStorageUser) {
      this.setState({
        user: {
          color: "red",
           name: "Ben",
           password: "butter"
        }
      })
    }
    this.ref = base.syncState(`/messages`, {
      context: this,
      state: 'messages'
    })
    this.ref = base.syncState(`/users`, {
      context: this,
      state: 'users'
    })
  }

  componentWillUnMount(){
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem('isLoggedIn', JSON.stringify(nextState.isLoggedIn));
    localStorage.setItem('user', JSON.stringify(nextState.user));
  }

  addMessage(message) {
    // takes a copy of existing state
    const messages = {...this.state.messages};
    // add in new message
    const timestamp = Date.now();
    messages[`message-${timestamp}`] = message;
    // set state
    this.setState({ messages });
    // equivalent to this.setState({ messages: messages });
  }

  addUser(user) {
    const users = { ...this.state.users };
    const timestamp = Date.now();
    users[`user-${timestamp}`] = user;
    this.setState({ users });
  }

  logIn(user){
    this.setState({ isLoggedIn: true });
    this.setState({ user })
  }

  render() {
    return (
        <div className="app">
          { this.state.isLoggedIn ?
          <div className="secret-diary">
            <div className="list-of-messages">
              {
                Object
                .keys(this.state.messages)
                .map(key => <Message key={key} index={key} details={this.state.messages[key]} />)
              }
            </div>
            <AddMessageForm color={this.state.user.color} addMessage={this.addMessage}/>
          </div>
          : <SignIn addUser={this.addUser} logIn={this.logIn} users={this.state.users}/> }
        </div>
    )
  }
}

export default App;
