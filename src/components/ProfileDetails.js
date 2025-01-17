import React from "react";

function ProfileDetails({ profile, onClose }) {
  return (
    <div className="profile-details">
      <button onClick={onClose}>Close</button>
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p><b>Address:</b> {profile.address}</p>
    </div>
  );
}

export default ProfileDetails;
