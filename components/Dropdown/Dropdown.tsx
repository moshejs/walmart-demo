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
        {this.state.displayMenu ? (
          <div className="dropdownMenu">
            <ul>
              <li
                onClick={() =>
                  this.props.setSortingType(SortingTypes.PRICE_ASC)
                }
              >
                $ - $$$
              </li>
              <li
                onClick={() =>
                  this.props.setSortingType(SortingTypes.PRICE_DESC)
                }
              >
                $$$ - $
              </li>
              <li
                onClick={() =>
                  this.props.setSortingType(SortingTypes.TOP_RATED)
                }
              >
                Top Rated
              </li>
              <li
                onClick={() => this.props.setSortingType(SortingTypes.POPULAR)}
              >
                Popular
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Dropdown);
