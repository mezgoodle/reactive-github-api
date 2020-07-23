import React from "react";

const Info = (props) => (
	<div>
		{props.login &&
		<div>
			<p>{props.public_repos}</p>
			<a href={props.html_url}>{props.login}</a>
		</div>
		}
		<p>{props.error}</p>
	</div>
);

export default Info;
