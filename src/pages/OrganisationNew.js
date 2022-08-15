import React from "react";
import TextInput from "../components/inputs/TextInput";
import DateInput from "../components/inputs/DateInput";
import LocationSearchInput from "../components/inputs/AddressForm";

function OrganisationNew() {
  return (
    <>
      <div>
        <h2> New Organisation </h2>
        <div className="organisation-form-wrapper">
          <form>
            <TextInput placeholder="Name" label="Organisation Name: " />
            <DateInput label="Date: " />
            <LocationSearchInput />
          </form>
        </div>
      </div>
    </>
  );
}

export default OrganisationNew;
