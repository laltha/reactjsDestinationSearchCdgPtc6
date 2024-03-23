// Write your code here

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="destinations-search-container">
            <h1 className="heading">Destination Search</h1>
          </div>
          <div className="sm-container">
            <input
              placeholder="search"
              value={searchInput}
              type="search"
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <div className="des-con">
            <ul className="destinations-list">
              {searchResults.map(eachDestination => (
                <DestinationItem
                  key={eachDestination.id}
                  destinationDetails={eachDestination}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
