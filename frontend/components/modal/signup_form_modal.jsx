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
        this.props.signup(this.state);
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
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
                                <select>
                                    <option value="">Please choose an option</option>
                                    <option value={this.state.status} onChange={this.handleChange('status')}>Critically Endangered</option>
                                    <option value={this.state.status} onChange={this.handleChange('status')}>Endangered</option>
                                    <option value={this.state.status} onChange={this.handleChange('status')}>Vulnerable</option>
                                </select>
                            </label>
                            <button>Sign Up</button>
                        </form>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {this.props.modal && <div>{signupForm()}</div>} {/* init state = false then after clicking button modal is true */}
                {<button onClick={() => this.props.showModal()}>Create New Account</button>} {/* init state = false then modal is true but because of !this.props.modal it stays false and then after clicking close modal = false but because of ! it's true */}
            </div>
        )
    }
}

export default SignupModal;