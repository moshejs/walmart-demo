import React, { Component } from 'react'

import './Header.scss'
import { connect } from 'react-redux'
import { toggleMobileMenu } from '../../store/reducers'

interface HeaderProps {
  cartItems: number
  toggleMobileMenu: any
}

const mapStateToProps = state => ({ cartItems: state.products.cart })

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    toggleMobileMenu: () => dispatch(toggleMobileMenu())
  }
}

class Header extends Component<HeaderProps, {}> {
  constructor(props, context) {
    super(props, context)
  }

  handleMouseDown = (e: any) => {
    this.props.toggleMobileMenu()
    e.stopPropagation()
  }

  render() {
    return (
      <div className="header">
        <img
          className="hamburger"
          src="https://moshejs.github.io/walmart-demo/assets/icons/hamburger.svg"
          onMouseDown={this.handleMouseDown}
        />

        <img
          className="logo"
          src="https://moshejs.github.io/walmart-demo/assets/icons/logo.svg"
        />

        <nav>
          <a href="#">
            Toys
            <img src="https://moshejs.github.io/walmart-demo/assets/icons/nav_active.svg" />
          </a>
          <a href="#">Furniture</a>
          <a href="#">Food</a>
          <a href="#">Health</a>
          <div className="cart">
            <span className="cartQuantity">{this.props.cartItems}</span>
            <img src="https://moshejs.github.io/walmart-demo/assets/icons/basket.svg" />
          </div>
        </nav>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
