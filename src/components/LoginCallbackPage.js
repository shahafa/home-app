import React from 'react';
import LogoImg from '../static/home.svg';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },

  logo: {
    height: '58px',
    paddingBottom: '20px',
  },

  label: {
    fontSize: '22px',
    textAlign: 'center',
    color: '#333',
    fontFamily: '"Avenir Next", Avenir, -apple-system, BlinkMacSystemFont, Roboto, Helvetica, sans-serif',
  },
};

const LoginCallbackPage = () => (
  <div style={styles.container}>
    <img style={styles.logo} src={LogoImg} alt="" />
    <div style={styles.label}>...אנא המתן</div>
  </div>
);

export default LoginCallbackPage;
