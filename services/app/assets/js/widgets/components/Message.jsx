import React, { Component } from 'react';
import { scrolled } from 'react-stay-scrolled';

class Message extends Component {
  static defaultProps = {
    message: '',
    user: '',
  }

  componentDidMount() {
    const { stayScrolled } = this.props;
    stayScrolled();
  }

  render() {
    const { message, user } = this.props;

    return (
      <div>
        <span className="ml-2 font-weight-bold">{`${user}: `}</span>
        {message}
      </div>
    );
  }
}

export default scrolled(Message);
