import React from "react";

const Repo = props => (
  <div className="alert alert-primary" role="alert">
    <a
      href={props.html_url}
      target="_blank"
      rel="noopener noreferrer"
      class="alert-link"
    >
      {props.name}
    </a>
  </div>
);

export default Repo;
