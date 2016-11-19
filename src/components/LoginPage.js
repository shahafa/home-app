import React from 'react';

export class Login extends React.Component {
  componentDidMount() {
    this.props.route.auth.login();
  }

  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
    }

    return (
      <div style={containerStyle}>
        <div
          id='hiw-login-container'
        />
      </div>
    )
  }
}

export default Login;
