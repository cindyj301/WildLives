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

        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <li key={`error-${idx}`}>
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
                        <div className="modal-header">
                            <div className="modal-header-text">
                                <div>Sign Up</div>
                                <div>It's quick and easy.</div>
                            </div>
                            <img
                                className="modal-close"
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
                                width="24"
                                height="24"
                                onClick={() => this.props.hideModal()}
                            />
                        </div>
                        <form className="modal-form" onSubmit={this.handleSubmit}>
                            {this.renderErrors()}
                            <input
                                type="text"
                                placeholder="First name"
                                value={this.state.fname}
                                onChange={this.handleChange('fname')}
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                value={this.state.lname}
                                onChange={this.handleChange('lname')}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                            />
                            <input
                                type="password"
                                placeholder="New password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />
                            <label>Animal
                                <input
                                    type="text"
                                    placeholder="Pygmy three-toed sloth"
                                    value={this.state.animal}
                                    onChange={this.handleChange('animal')}
                                />
                            </label>
                            <label>Conservation Status
                                <label>Critically Endangered
                                    <input
                                        type="radio"
                                        value="Critically Endangered"
                                        checked={this.state.status === 'Critically Endangered'}
                                        onChange={this.handleChange('status')}
                                    />
                                </label>
                                <label>Endangered
                                    <input
                                        type="radio"
                                        value="Endangered"
                                        checked={this.state.status === 'Endangered'}
                                        onChange={this.handleChange('status')}
                                    />
                                </label>
                                <label>Vulnerable
                                    <input
                                        type="radio"
                                        value="Vulnerable"
                                        checked={this.state.status === 'Vulnerable'}
                                        onChange={this.handleChange('status')}
                                    />
                                </label>
                            </label>
                            <button>Sign Up</button>
                        </form>
                    </div>
                </div>
            )
        }
        
        return (
            <div>
                {this.props.modal && <div>{signupForm()}</div>}
                <button onClick={() => this.props.showModal()}>Create New Account</button> 
            </div>
        )
    }
}

export default SignupModal;