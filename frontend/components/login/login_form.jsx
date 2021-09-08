import React from 'react';

import SignupFormContainer from '../signup/signup_form_container';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.errorTime = () => setTimeout(() => this.props.clearErrors(), 3000);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        this.errorTime();
    }

    componentWillUnmount() {
        clearInterval(this.errorTime);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        const { errors } = this.props;
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={`error-${idx}`} className="login-errors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: "iluvsloths@gmail.com", password: "eatingleaves123" }
        this.props.login(demoUser);
    }

    render() {
        const splashText = () => (
            <div className="splash-logo-container">
                <h1 className="splash-logo">WildLives</h1>
                <h2 className="splash-text">Connect with friends in the wild on WildLives.</h2>
            </div>
        )

        return (
            <div className="splash-container">
                {splashText()}
                <div className="form-container">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        {this.renderErrors()}
                        <input
                            className="form-input"
                            type="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange('email')}
                        />
                        <input
                            className="form-input"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                        <button className="login-button">
                            <p>Log In</p>
                        </button>
                    </form>
                    <div className="form-button-container">
                        <div className="demo-user-button">
                            <p onClick={(e) => this.handleDemoUser(e)}>Log in as Demo Sloth</p>
                        </div>
                        <SignupFormContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;