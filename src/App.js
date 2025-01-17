import React from "react";
import ProfileList from "./components/ProfileList";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Profile Explorer</a>
        </div>
      </nav>
      <div className="container mt-4">
        <ProfileList />
        <AdminPanel />
      </div>
    </div>
  );
}

export default App;
