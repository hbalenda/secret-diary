import React from 'react';

class Message extends React.Component {
  componentDidMount() {
    var messageWindow = document.querySelector('.list-of-messages');
    messageWindow.scrollTop = messageWindow.scrollHeight;
  }
  render() {
    return (
      <div className="message">
        <p className={this.props.details.user.name}>{this.props.details.text}</p>
      </div>
    )
  }
}

export default Message;
