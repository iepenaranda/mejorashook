import React, { useEffect, useState } from "react";
import "./App.css";

function GitHubUser({ user }) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }
    setLoading(true);

    fetch(`https://api.github.com/users/${user}`)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [user]);
  console.log(data);
  if (loading) {
    return <h1> loading</h1>;
  }
  if (error) {
    return <p>{"Error: " + JSON.stringify(error)}</p>;
  }
  if (!data) {
    return null;
  }
  return (
    <div className="card">
      <img src={data.avatar_url} className="card-img-top" alt="..." />
      <div className="accordion accordion-flush">
        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Basic Info
            </button>
          </h3>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <h5>{data.login}</h5>
            <p>{data.bio}</p>
          </div>
        </div>

        <div className="accordion-item">
          <h3 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Collab. Info
            </button>
          </h3>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <p>Public repos: {data.public_repos}</p>
            <a href={data.repos_url}>Repos</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <GitHubUser user="iepenaranda" />;
}
