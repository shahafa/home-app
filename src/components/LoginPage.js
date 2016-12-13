import React, { PropTypes } from 'react';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
  },
};

export class Login extends React.Component {
  static propTypes = {
    route: PropTypes.object.isRequired,
  }

  componentDidMount() {
    this.props.route.auth.login();
  }

  render() {
    return (
      <div style={styles.container}>
        <div
          id="hiw-login-container"
        />
      </div>
    );
  }
}

export default Login;
