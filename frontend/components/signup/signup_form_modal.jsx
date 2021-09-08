import React from 'react';

class SignupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            animal: '',
            status: ''
        }

        this.errorTime = () => setTimeout(() => this.props.clearErrors(), 5000);
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
        this.props.signup(this.state).then(this.props.hideModal);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    renderErrors() {
        const { errors } = this.props;
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={`error-${idx}`} className="signup-errors">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const signupForm = () => {
            return (
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-header signup-form">
                            <div className="modal-header-text">
                                <h3 className="signup-text">Sign Up</h3>
                                <p className="signup-text">It's quick and easy.</p>
                            </div>
                            <img
                                className="modal-close"
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
                                width="24"
                                height="24"
                                onClick={() => this.props.hideModal()}
                            />
                        </div>

                        <form className="modal-form signup-form" onSubmit={this.handleSubmit}>
                            {this.renderErrors()}
                            <div className="name-input-container">
                                <input
                                    className="signup-input"
                                    type="text"
                                    placeholder="First name"
                                    value={this.state.fname}
                                    onChange={this.handleChange('fname')}
                                />
                                <input
                                    className="signup-input"
                                    type="text"
                                    placeholder="Last name"
                                    value={this.state.lname}
                                    onChange={this.handleChange('lname')}
                                />
                            </div>

                            <input
                                className="signup-input"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                            />
                            <input
                                className="signup-input"
                                type="password"
                                placeholder="New password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />

                            <label htmlFor="animal" className="label-input">Animal</label>
                                <input
                                    className="signup-input"
                                    type="text"
                                    name="animal"
                                    placeholder="Pygmy three-toed sloth"
                                    value={this.state.animal}
                                    onChange={this.handleChange('animal')}
                                />
                            
                            <label htmlFor="status" className="label-input">Conservation Status</label>
                            <div className="status-container">
                                <div className="status-input-container">
                                    <label>Critically Endangered</label>
                                    <input
                                        type="radio"
                                        value="Critically Endangered"
                                        name="status"
                                        checked={this.state.status === 'Critically Endangered'}
                                        onChange={this.handleChange('status')}
                                    />
                                </div>
                                <div className="status-input-container">
                                    <label>Endangered</label>
                                    <input
                                        type="radio"
                                        value="Endangered"
                                        name="status"
                                        checked={this.state.status === 'Endangered'}
                                        onChange={this.handleChange('status')}
                                    />
                                </div>
                                <div className="status-input-container">
                                    <label>Vulnerable</label>
                                    <input
                                        type="radio"
                                        value="Vulnerable"
                                        name="status"
                                        checked={this.state.status === 'Vulnerable'}
                                        onChange={this.handleChange('status')}
                                    />
                                </div>
                            </div>
                            <div className="signup-button-container">
                                <button className="signup-modal-button signup-button">
                                    <p>Sign Up</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {this.props.modal && signupForm() }
                <button className="signup-button" onClick={() => this.props.showModal()}>Create New Account</button>
            </div>
        )
    }
}

export default SignupModal;