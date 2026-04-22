import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const search = async () => {
    const username = document.getElementById("input").value;
    const userRes = await axios.get(`https://api.github.com/users/${username}`);
    const reposRes = await axios.get(`https://api.github.com/users/${username}/repos`);
    setUser(userRes.data);
    setRepos(reposRes.data);
  };

  return (
    <div className="container">
      <h1>DevTrackr PRO</h1>

      <div className="search">
        <input id="input" placeholder="GitHub user"/>
        <button onClick={search}>Buscar</button>
      </div>

      {user && (
        <div className="card">
          <img src={user.avatar_url}/>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
        </div>
      )}

      <BarChart width={400} height={300} data={repos}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Bar dataKey="stargazers_count"/>
      </BarChart>
    </div>
  );
}
