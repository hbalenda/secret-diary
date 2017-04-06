import React from 'react';
import Message from './Message';
import AddMessageForm from './AddMessageForm';
import base from '../base';

class App extends React.Component {
  constructor() {
    super();
    this.addMessage = this.addMessage.bind(this);
    this.state = {
      messages:{},
      users:{
        "user-1":{
          name:"hannah",
          color:"white"
        },
        "user-2":{
          name:"ben",
          color:"blue"
        }
      },
    };
  }

  componentWillMount(){
    this.ref = base.syncState(`/messages`, {
      context: this,
      state: 'messages'
    })
    this.ref = base.syncState(`/users`, {
      context: this,
      state: 'users'
    })
    // var localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
    // if (localStorageRef) {
    //   this.setState({
    //     order: JSON.parse(localStorageRef)
    //   })
    // }
  }

  componentWillUnMount(){
    base.removeBinding(this.ref);
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

  render() {
    return (
      <div className="secret-diary">
        <div className="list-of-messages">
          {
            Object
            .keys(this.state.messages)
            .map(key => <Message key={key} index={key} details={this.state.messages[key]} />)
          }
        </div>
        <AddMessageForm user={this.state.user} addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App;
