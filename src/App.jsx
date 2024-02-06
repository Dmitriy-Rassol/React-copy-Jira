import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ActiveSprint from "./Components/ActiveSprint/ActiveSprint";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/active_sprint" element={<ActiveSprint />} />
          <Route path="/admin_panel" element={<AdminPanel />} />
        </Routes>
    </>
  );
}

export default App;
