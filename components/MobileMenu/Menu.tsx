import React, { Component } from 'react'
import { toggleMobileMenu } from '../../store/reducers'
import { connect } from 'react-redux'
import './Menu.scss'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    toggleMobileMenu: () => dispatch(toggleMobileMenu())
  }
}

interface HeaderProps {
  toggleMobileMenu: any
}

class Menu extends Component<any, HeaderProps> {
  handleMouseDown = (e: any) => {
    this.props.toggleMobileMenu()
    e.stopPropagation()
  }

  render() {
    return (
      <div className="mobileMenu">
        <div
          style={{
            height: '80px',
            padding: '0 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <img
            className="hamburger"
            src="https://moshejs.github.io/walmart-demo/assets/icons/hamburger_close.svg"
            onMouseDown={this.handleMouseDown}
          />
        </div>

        <nav className="mobileMenuNav">
          <a href="#">
            Toys{' '}
            <img src="https://moshejs.github.io/walmart-demo/assets/icons/nav_active.svg" />
          </a>
          <a href="#">Furniture</a>
          <a href="#">Food</a>
          <a href="#">Health</a>
        </nav>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Menu)
