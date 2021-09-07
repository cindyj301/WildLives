import React from 'react'

class NavBarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const accountIcon = () => {
      return (
        <li className="navbar-item">
          <a
            href="#"
            className="icon-button"
            onClick={this.handleClick}>
            {this.props.icon}
          </a>
        </li>
      )
    }

    return (
      <>
        {accountIcon()}
        { this.state.open && this.props.children } {/* if open = true then show props.children, else render nothing */ }
      </>
    )
  }
}

export default NavBarItem;

