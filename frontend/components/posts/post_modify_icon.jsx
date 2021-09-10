import React from 'react'

export class PostModifyIcon extends React.Component {
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
        return (
            <div>
                {this.props.icon}
                { this.state.open && this.props.children }
            </div>
        )
    }
}

export default PostModifyIcon;

