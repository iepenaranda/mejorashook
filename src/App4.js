import React, { useState } from "react";
import "./App.css";
import GitHubUser from "./GitHubUser";

export default function App() {
  const [searchUser, setSearchUser] = useState("");
  const handleChange = (event) => {
    setSearchUser(event.target.value);
  }

  return (
    <div>
      <input type="text" placeholder="search" value={searchUser} onChange={handleChange}/>
      <GitHubUser user={searchUser} />
    </div>
  );
}
