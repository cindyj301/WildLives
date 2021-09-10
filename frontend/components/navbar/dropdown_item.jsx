import React from 'react'

const DropdownItem = ({ logout, leftIcon }) => {
  return (
    <div onClick={logout} className="menu-item">
      <span className="icon-left">{leftIcon}</span>
      <p className="logout-text">Log Out</p>
    </div>
  )
}

export default DropdownItem;

