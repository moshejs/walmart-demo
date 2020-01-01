import React, { Component } from 'react'

import './Dropdown.scss'
import { setSortingType, SortingTypes } from '../../store/reducers'
import { connect } from 'react-redux'

interface DropdownState {
  menuOpen: boolean
}

interface DropdownProps {
  setSortingType: any
}

const sortList = [
  {
    text: '$ - $$$',
    sortType: SortingTypes.PRICE_ASC
  },
  {
    text: '$$$ - $',
    sortType: SortingTypes.PRICE_DESC
  },
  {
    text: 'Top Rated',
    sortType: SortingTypes.TOP_RATED
  },
  {
    text: 'Popular',
    sortType: SortingTypes.POPULAR
  }
]

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    setSortingType: type => dispatch(setSortingType(type))
  }
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  constructor(props, context) {
    super(props, context)

    this.state = {
      menuOpen: false
    }
  }

  showDropdownMenu = event => {
    event.preventDefault()
    this.setState({ menuOpen: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = () => {
    this.setState({ menuOpen: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu)
    })
  }

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
    )
  }
}

export default connect(null, mapDispatchToProps)(Dropdown)
