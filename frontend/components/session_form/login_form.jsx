import React from 'react';

import SignupModal from '../modal/signup_form_modal';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: "iluvsloths@gmail.com", password: "eatingleaves123" }
        this.setState(demoUser);
        this.props.login(demoUser);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <input
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                    />
                    <button>Log In</button>
                </form>
                <button onClick={(e) => this.handleDemoUser(e)}>Log In as Demo User</button>
                <SignupModal />
            </div>
        )
    }
}

export default SessionForm;