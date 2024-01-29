import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [profile, setProfile] = useState(null);
  const fetchDataProfile = async () => {
    const data = await fetch("https://api.github.com/users/NestiaDev-id");
    const userProfile = await data.json();
    setProfile(userProfile);
  };
  useEffect(() => {
    // fetch("https://api.github.com/users/NestiaDev-id")
    //   .then((response) => response.json())
    //   .then((data) => setProfile(data))
    //   .catch((error) => console.error("Error fetching data:", error));
    fetchDataProfile();
  }, []);
  if (!profile) return "Loading...";
  return (
    <>
      <h1>Data Fetching</h1>
      <hr />
      <div className="card">
        <img
          className="card-image"
          src={profile.avatar_url}
          style={{ height: 200, width: 200 }}
          alt="profile picture"
        ></img>
        <h2 className="card-title">{profile.name}</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo tempore
          itaque consequatur quae, reprehenderit quos in aut laboriosam sed
          saepe dolorem modi pariatur id doloribus. Voluptate aliquam
          repudiandae debitis quae?
        </p>
      </div>
    </>
  );
}

export default App;
