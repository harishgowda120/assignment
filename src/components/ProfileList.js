import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import MapView from "./MapView";
import { fetchProfiles } from "../services/api";

function ProfileList() {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    fetchProfiles().then(setProfiles);
  }, []);

  return (
    <div>
      <h2 className="text-center mb-4">Profiles</h2>
      <div className="row g-3">
        {profiles.map((profile) => (
          <div className="col-md-4" key={profile.id}>
            <ProfileCard
              profile={profile}
              onSummaryClick={() => setSelectedProfile(profile)}
            />
          </div>
        ))}
      </div>
      {selectedProfile && (
        <MapView
          address={selectedProfile.address}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

export default ProfileList;
