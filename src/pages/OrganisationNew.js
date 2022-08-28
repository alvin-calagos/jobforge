import React from "react"
import TextInput from "../components/inputs/TextInput"
import DateInput from "../components/inputs/DateInput"
import LocationSearchInput from "../components/inputs/AddressAutoCompleteInput"

function OrganisationNew() {
  return (
    <>
      <div>
        <h2> New Organisation </h2>
        <div className="organisation-form-wrapper">
          <form>
            <TextInput placeholder="Name" label="Organisation Name: " />
            <DateInput label="Active Since: " />
            <LocationSearchInput label="Address: " />
            <div>Primary Contact</div>
            <TextInput placeholder="First Name" label="First Name: " />
            <TextInput placeholder="Last Name" label="Last Name: " />
          </form>
        </div>
      </div>
    </>
  )
}

export default OrganisationNew
