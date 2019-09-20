import React from 'react';

const WebSockets = (url, Component) =>
  class WebSocketComponent extends React.Component {
    constructor (props) {
      super(props);
      this.socket = null;
      this.state = {
        socket: null,
      }
    }

    UNSAFE_componentWillMount () {
      this.socket = new WebSocket(url);
      this.socket.onopen = () => this.setState({ socket: this.socket });
    }

    componentWillUnmount () {
      this.socket.close();
    }

    render () {
      return <Component socket={this.state.socket} {...this.props} />
    }
  }

export default WebSockets;