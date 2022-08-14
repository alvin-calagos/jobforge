import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getOrganisation, deleteOrganisation } from "../data";
import Button from 'react-bootstrap/Button';

function Organisation() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let organisation = getOrganisation(parseInt(params.organisationId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {organisation.credit_amount}</h2>
      <p>
        {organisation.name}: {organisation.number}
      </p>
      <p>Due Date: {organisation.due}</p>
      <p>
        <Button
          variant="primary"
          onClick={() => {
            deleteOrganisation(organisation.number);
            navigate("/organisations" + location.search);
          }}
        >
          Delete
        </Button>
      </p>
    </main>
  );
}

export default Organisation;