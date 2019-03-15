import React, { Component } from 'react'
import { Form, Label } from 'semantic-ui-react';

import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";

class PlaceInput extends Component {
    state = {
        scriptLoaded: false,
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

    handleScriptLoaded = () => this.setState({scriptLoaded: true})
  
    render() {
        const {input, width,placeholder, options, meta: {touched, error}} = this.props;
    return (
        <Form.Field error={touched && !!error} width={width}>
        <PlacesAutocomplete
        inputProps={{...input, placeholder}}
        options={options}
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
        {touched && error && <Label basic color='red'>{error}</Label>}
    </Form.Field>
    )
  }
}

export default PlaceInput;

