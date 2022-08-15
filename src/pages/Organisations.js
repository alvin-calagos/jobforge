import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getOrganisations } from "../data";

function Organisations() {
  let organisations = getOrganisations();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {organisations
          .filter((organisation) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = organisation.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((organisation) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/organisations/${organisation.number}`}
              key={organisation.number}
            >
              {organisation.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}

export default Organisations;
