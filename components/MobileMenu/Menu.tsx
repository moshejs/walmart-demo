import React, { Component } from "react";
import { toggleMobileMenu } from "../../store";
import { connect } from "react-redux";
import './Menu.scss';

const menuStyle = {
    backgroundColor: '#041E42',
    height: '100vh',
    width: '100vw',
    zIndex: 999,
};

const hamburgerStyle = {
    height: '50%'
}

const mapDispatchToProps = dispatch => {
    return {
      // dispatching actions returned by action creators
      toggleMobileMenu: () => dispatch(toggleMobileMenu()),
     
    }
  }


interface HeaderProps {
    toggleMobileMenu: any;
  }
  

class Menu extends Component<any, HeaderProps> {

    handleMouseDown = (e: any) => {
        this.props.toggleMobileMenu();
        e.stopPropagation();
    }

    render() {
        return (
        <div style={menuStyle}>
            <div style={{height: '80px', padding: '0 15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between' }}>
                    
                <img style={hamburgerStyle} 
                        src="assets/icons/hamburger_close.svg" 
                        onMouseDown={this.handleMouseDown}  /> 


            </div>


            <nav className="mobileMenuNav">
                <a href="#">Toys <img src="assets/icons/nav_active.svg" /></a>
                <a href="#">Furniture</a>
                <a href="#">Food</a>
                <a href="#">Health</a>
                
            </nav>
        </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Menu);