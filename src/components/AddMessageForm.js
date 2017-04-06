import React from 'react';

class AddMessageForm extends React.Component {
  createMessage(event) {
    event.preventDefault();
    const message = {
      text: this.text.value,
      user: this.props.user,
    }
    this.props.addMessage(message);
    this.messageForm.reset();
  }

  render() {
    return (
      <form className="message-form" ref={(input) => this.messageForm = input} onSubmit={(e) => this.createMessage(e)}>
        <textarea ref={(input) => this.text = input}></textarea>
        <button type="submit">+</button>
      </form>
    )
  }
}

export default AddMessageForm;