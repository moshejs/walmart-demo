import React, { Component } from "react";

import "./Dropdown.scss";
import { setSortingType, SortingTypes } from "../../store";
import { connect } from "react-redux";

// interface AppState {
//   menuVisible: boolean
// }

// interface HeaderProps {
//   cartItems: number
// }

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    setSortingType: type => dispatch(setSortingType(type))
  };
};

class Dropdown extends Component<any, any> {
  constructor(props, context) {
    super(props, context);

    this.state = {
      displayMenu: false
    };
  }

  showDropdownMenu = event => {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  };

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  };

  render() {
    return (
      <div className="dropdown">
        <div className="button" onClick={this.showDropdownMenu}>
          Sort By
        </div>
        {this.state.menuOpen ? (
          <div className="dropdownMenu">
            <ul>
              {sortList.map((sortItem, index) => (
                <li
                  onClick={() => this.props.setSortingType(sortItem.sortType)}
                >
                  {sortItem.text}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Dropdown);
