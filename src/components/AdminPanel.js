import React, { useState } from "react";
import { addProfile } from "../services/api";

function AdminPanel() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async () => {
    await addProfile({ name, photo, description, address });
    alert("Profile added!");
    setName("");
    setPhoto("");
    setDescription("");
    setAddress("");
  };

  return (
    <div className="mt-5">
      <h2 className="text-center mb-4">Admin Panel</h2>
      <div className="card shadow-sm p-4">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Photo URL</label>
            <input
              type="text"
              className="form-control"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-success" onClick={handleSubmit}>
            Add Profile
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPanel;
