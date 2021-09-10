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
        const modifyIcon = () => (
            <img
                src={modifyPost}
                alt="modify-post"
                className="modify-post-icon"
                onClick={this.handleClick}
            />
        )

        return (
            <div>
                {modifyIcon()}
                { !this.state.open && this.props.children } {/* change back to this.state.open after testing is finished */}
            </div>
        )
    }
}

export default PostModifyIcon;

