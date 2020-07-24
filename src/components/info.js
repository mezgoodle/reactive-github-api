import React from "react";
import Api from "./repo";

const Info = props => (
  <div>
    {props.login && (
      <div>
        <p>Repositories: {props.public_repos}</p>
        <p>
          Link to user: <a href={props.html_url}>{props.login}</a>
        </p>
        <h1 className="text-center">Repositories</h1>
        {props.repos.map(repo => (
          <Api name={repo.name} />
        ))}
      </div>
    )}
    <p>{props.error}</p>
  </div>
);

export default Info;
