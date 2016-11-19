import React from 'react';
import LogoImg from '../static/home.svg';

export class LoginCallbackPage extends React.Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
    }

    const logoStyle = {
      height: '58px',
      paddingBottom: '20px',
    }

    const labelStyle = {
      fontSize: '22px',
      textAlign: 'center',
      color: '#333',
      fontFamily: '"Avenir Next", Avenir, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif',
    }

    return (
      <div style={containerStyle}>
        <img style={logoStyle} src={LogoImg} alt='' />
        <div style={labelStyle}>Please wait while authenticating...</div>
      </div>
    )
  }
}

export default LoginCallbackPage;
