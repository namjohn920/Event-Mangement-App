import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

import { incrementCounter, decrementCounter } from "./testActions";
import { openModal } from '../modals/modalActions'

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "", scriptLoaded: false };
  }

  handleScriptLoad = () => {
    this.setState({scriptLoaded: true});
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log("Success", latLng))
      .catch(error => console.error("Error", error));
  };

  render() {

    const { incrementCounter, decrementCounter, data, openModal } = this.props;

    return (
      <div>
        <h1>Test</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="increment" />
        <Button onClick={decrementCounter} color="red" content="decrement" />
        <Button onClick={() => openModal('TestModal', {data:43})} color="teal" content="Open Modal" />

        <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
