import React, { useState } from "react"
import PlacesAutocomplete, { geocodeByAddress } from "react-places-autocomplete"

const AddressAutoCompleteInput = ({ label, setOrgAddress }) => {
  const [address, setAddress] = useState("")

  const handleChange = (address) => {
    setAddress(address)
  }
  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => setOrgAddress(results))
      .catch((error) => console.error("Error", error))
  }
  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <label>{label}</label>
          <input
            {...getInputProps({
              placeholder: "Search Places ...",
              className: "location-search-input"
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item"
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" }
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style
                  })}
                  key={suggestion.placeId}
                >
                  <span className="form-control">{suggestion.description}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  )
}
export default AddressAutoCompleteInput
