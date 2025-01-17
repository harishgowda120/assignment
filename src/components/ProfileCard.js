import React from "react";
import img from "./image.png";

function ProfileCard({ profile, onSummaryClick }) {
  return (
    <div className="card h-100 shadow-lg border-0 bg-light" style={{ width: "20rem", borderRadius: "10px", overflow: "hidden", margin: "0 auto" }}>
      {/* Profile Image */}
      <img
        src={img}
        className="card-img-top"
        alt={profile.name}
        style={{
          height: "180px",
          objectFit: "cover",
          borderBottom: "5px solid #007bff",
        }}
      />
      {/* Card Content */}
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title fw-bold text-dark">{profile.name}</h5>
        <p className="card-text text-secondary mb-4">{profile.description}</p>
        <button
          className="btn btn-primary w-75 mx-auto"
          style={{ borderRadius: "20px", fontWeight: "bold" }}
          onClick={onSummaryClick}
        >
          View on Map
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
