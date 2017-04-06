import React from 'react';

class Message extends React.Component {
  componentDidMount() {
    var messageWindow = document.querySelector('.list-of-messages');
    messageWindow.scrollTop = messageWindow.scrollHeight;
  }
  render() {
    const divstyle = {
      color: this.props.details.color
    }
    return (
      <div style={divstyle} className="message">
        <p>{this.props.details.text}</p>
      </div>
    )
  }
}

export default Message;
