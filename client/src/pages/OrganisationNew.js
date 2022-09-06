import React, { useState } from "react"
import TextInput from "../components/inputs/TextInput"
import DateInput from "../components/inputs/DateInput"
import LocationSearchInput from "../components/inputs/AddressAutoCompleteInput"

function OrganisationNew() {
  const getAddress = (values) => {
    setOrgAddress(values)
  }

  const [orgName, setOrgName] = useState("")
  const [orgDateCreated, setOrgDateCreated] = useState("")
  const [orgAddress, setOrgAddress] = useState("")
  const [orgPhone, setOrgPhone] = useState("")
  const [orgEmail, setOrgEmail] = useState("")
  console.log(orgAddress)
  return (
    <>
      <div>
        <h2 className="text-center mt-5"> New Organisation </h2>
        <div className="d-flex text-center organisation-form-wrapper">
          <form className="d-flex mt-5">
            <TextInput
              placeholder="Name"
              label="Organisation Name: "
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
            <DateInput
              label="Active Since: "
              value={orgDateCreated}
              onChange={(e) => setOrgDateCreated(e.target.value)}
            />
            <LocationSearchInput label="Address: " />
            <TextInput
              label="Selected Address"
              value={orgAddress}
              handleChange={getAddress}
              onChange={(e) => setOrgAddress(e.target.value)}
            />
            <TextInput
              placeholder="Phone"
              label="Billing Phone: "
              type="text"
              value={orgPhone}
              onChange={(e) => setOrgPhone(e.target.value)}
            />
            <TextInput
              placeholder="Email"
              label="Billing Email: "
              type="text"
              value={orgEmail}
              onChange={(e) => setOrgEmail(e.target.value)}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default OrganisationNew
