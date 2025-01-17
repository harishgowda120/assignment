let profiles = [
  { id: 1, name: "John Doe", photo: "https://via.placeholder.com/150", description: "Software Developer", address: "123 Main St, Cityville" },
  { id: 2, name: "Jane Smith", photo: "https://via.placeholder.com/150", description: "Graphic Designer", address: "456 Maple St, Townsville" },
  { id: 3, name: "Alice Johnson", photo: "https://via.placeholder.com/150", description: "Data Scientist", address: "789 Oak St, Villagetown" },
  { id: 4, name: "Bob Brown", photo: "https://via.placeholder.com/150", description: "Product Manager", address: "101 Pine St, Urbanville" },
  { id: 5, name: "Charlie White", photo: "https://via.placeholder.com/150", description: "Marketing Specialist", address: "102 Elm St, Suburbia" },
  { id: 6, name: "Diana Green", photo: "https://via.placeholder.com/150", description: "UX Designer", address: "103 Cedar St, Metropolis" },
  { id: 7, name: "Ethan Black", photo: "https://via.placeholder.com/150", description: "Full-Stack Developer", address: "104 Spruce St, Portville" },
  { id: 8, name: "Fiona Blue", photo: "https://via.placeholder.com/150", description: "AI Researcher", address: "105 Birch St, Baytown" },
  { id: 9, name: "George Yellow", photo: "https://via.placeholder.com/150", description: "Content Writer", address: "106 Chestnut St, Harborville" },
  { id: 10, name: "Hannah Grey", photo: "https://via.placeholder.com/150", description: "HR Manager", address: "107 Walnut St, Rivertown" },
  { id: 11, name: "Ian Red", photo: "https://via.placeholder.com/150", description: "DevOps Engineer", address: "108 Poplar St, Capital City" },
  { id: 12, name: "Julia Violet", photo: "https://via.placeholder.com/150", description: "Software Tester", address: "109 Willow St, Uptown" },
  { id: 13, name: "Kevin Orange", photo: "https://via.placeholder.com/150", description: "Mobile Developer", address: "110 Ash St, Westend" },
  { id: 14, name: "Laura Cyan", photo: "https://via.placeholder.com/150", description: "Business Analyst", address: "111 Redwood St, Midtown" },
  { id: 15, name: "Mark Indigo", photo: "https://via.placeholder.com/150", description: "Tech Consultant", address: "112 Sycamore St, Eastside" },
  { id: 16, name: "Nancy Gold", photo: "https://via.placeholder.com/150", description: "Systems Engineer", address: "113 Hickory St, Southville" },
  { id: 17, name: "Oscar Pink", photo: "https://via.placeholder.com/150", description: "IT Support Specialist", address: "114 Fir St, Downtown" },
  { id: 18, name: "Paul Silver", photo: "https://via.placeholder.com/150", description: "Security Analyst", address: "115 Cypress St, Hilltown" },
  { id: 19, name: "Quinn Bronze", photo: "https://via.placeholder.com/150", description: "Game Developer", address: "116 Dogwood St, Lowlands" },
  { id: 20, name: "Rachel Teal", photo: "https://via.placeholder.com/150", description: "SEO Specialist", address: "117 Magnolia St, Highlands" },
  { id: 21, name: "Sam Lime", photo: "https://via.placeholder.com/150", description: "Database Administrator", address: "118 Locust St, Glenville" },
  { id: 22, name: "Tina Lavender", photo: "https://via.placeholder.com/150", description: "Cloud Architect", address: "119 Alder St, Summit" },
  { id: 23, name: "Uma Amber", photo: "https://via.placeholder.com/150", description: "Network Engineer", address: "120 Maplewood St, Coasttown" },
  { id: 24, name: "Victor Cream", photo: "https://via.placeholder.com/150", description: "Blockchain Developer", address: "121 Juniper St, Valleyville" },
  { id: 25, name: "Wendy Plum", photo: "https://via.placeholder.com/150", description: "Web Designer", address: "122 Chestnut St, Meadowlands" },
  { id: 26, name: "Xavier Coral", photo: "https://via.placeholder.com/150", description: "Ethical Hacker", address: "123 Palmtree St, Rainforest" },
  { id: 27, name: "Yara Olive", photo: "https://via.placeholder.com/150", description: "Technical Writer", address: "124 Pineapple St, Oasis" },
  { id: 28, name: "Zane Sapphire", photo: "https://via.placeholder.com/150", description: "AI Engineer", address: "125 Horizon St, Sunrise City" },
  { id: 29, name: "Annie Rose", photo: "https://via.placeholder.com/150", description: "Project Manager", address: "126 Blossom St, Paradise Town" },
  { id: 30, name: "Brian Jade", photo: "https://via.placeholder.com/150", description: "Cybersecurity Expert", address: "127 Moonlit St, Starville" },

  ];
  
  export const fetchProfiles = async () => profiles;
  
  export const addProfile = async (profile) => {
    profiles.push({ ...profile, id: profiles.length + 1 });
  };
  
  export const editProfile = async (id, updatedProfile) => {
    profiles = profiles.map((profile) =>
      profile.id === id ? { ...profile, ...updatedProfile } : profile
    );
  };
  
  export const deleteProfile = async (id) => {
    profiles = profiles.filter((profile) => profile.id !== id);
  };
  