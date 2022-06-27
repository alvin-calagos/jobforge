import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>App!</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/organisations">Organisations</Link>
      </nav>
      <Outlet />
    </div>
    
  );
}

export default App;
