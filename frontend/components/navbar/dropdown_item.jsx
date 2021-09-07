import React from 'react'

const DropdownItem = props => {
  return (
    <div onClick={props.logout} className="menu-item">
      <span className="icon-left">{props.leftIcon}</span>
      <p className="logout-text">Log Out</p>
    </div>
  )
}

export default DropdownItem;

