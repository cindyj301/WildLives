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
            status: '',
            show: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({ show: !this.state.show });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        const signupForm = () => {
            return (
                <div className="modal-content">
                    <button className="close" onClick={this.toggleModal}>X</button>
                    <div className="modal-header">
                        <div>Sign Up</div>
                        <div>It's quick and easy.</div>
                    </div>
                    <form className="modal-body" onSubmit={this.handleSubmit}>
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
                        <label>Conservation Status {/* change to drop down for status */}
                            <input
                                type="text"
                                placeholder="Critically Endangered"
                                value={this.state.status}
                                onChange={this.handleChange('status')}
                            /> 
                        </label>
                        <button>Sign Up</button>
                    </form>
                </div>
            )
        }
        return (
            <div>
                {this.state.show && <div>{signupForm()}</div>}
                {!this.state.show && <button onClick={this.toggleModal}>Create New Account</button>}
            </div>
        )
    }
}

export default SignupModal;