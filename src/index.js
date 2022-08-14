import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import Dashboard from './pages/Dashboard';
import Organisations from './pages/Organisations';
import Organisation from './pages/Organisation';
import NewOrganisation from './pages/OrganisationNew';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="new-organisation" element={<NewOrganisation />} />
        <Route path="organisations" element={<Organisations />}>
          <Route path=":organisationId" element={<Organisation />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
