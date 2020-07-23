import React from "react";

class Info extends React.Component {
	render() {
		return (
			<div>
				{this.props.login &&
				<div>
					<p>{this.props.public_repos}</p>
					<a href={this.props.html_url}>{this.props.login}</a>
				</div>
				}
			</div>
		)
	}
}

export default Info;
