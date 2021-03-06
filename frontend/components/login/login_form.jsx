import React from "react";

import Modal from "../modal/modal";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .login(this.state)
      .then(this.props.clearErrors)
      .then(this.props.hideModal);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  renderErrors() {
    const { errors } = this.props;
    return errors.map((error, idx) => (
      <li key={`error-${idx}`} className="login-errors">
        {error}
      </li>
    ));
  }

  handleDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      email: "iluvsloths@gmail.com",
      password: "eatingleaves123",
    };
    this.props.login(demoUser);
  }

  render() {
    const splashText = () => (
      <div className="splash-logo-container">
        <h1 className="splash-logo">WildLives</h1>
        <h2 className="splash-text">
          Connect with friends in the wild on WildLives.
        </h2>
      </div>
    );

    return (
      <div>
        <Modal />
        <div className="splash-container">
          {splashText()}
          <div className="form-container">
            <form className="login-form" onSubmit={this.handleSubmit}>
              <ul className="login-errors-container">{this.renderErrors()}</ul>
              <input
                className="form-input"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange("email")}
              />
              <input
                className="form-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange("password")}
              />
              <button className="login-button">
                <p>Log In</p>
              </button>
            </form>
            <div className="form-button-container">
              <div className="demo-user-button">
                <p onClick={(e) => this.handleDemoUser(e)}>
                  Log in as Demo Sloth
                </p>
              </div>
              <button
                className="signup-button"
                onClick={() => this.props.showModal()}
              >
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
