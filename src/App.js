import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Api from "./components/api_info";

class App extends React.Component {

	state = {
		login: undefined,
		html_url: undefined,
		public_repos: undefined,
		url: undefined,
		error: undefined,
	}

	gettingInfo = async (e) => {
		e.preventDefault();
		const user = e.target.elements.user.value;
		
		if (user) {
			const api_url = await fetch(`https://api.github.com/users/${user}`);
			const data = await api_url.json();
			this.setState({
				login: data.login,
				html_url: data.html_url,
				public_repos: data.public_repos,
				url: data.url,
				error: undefined,
			});	
		} else {
			this.setState({
				login: undefined,
				html_url: undefined,
				public_repos: undefined,
				url: undefined,
				error: 'Enter username',
			})
		}
	}

	render() {
		return (
			<div>
				<Info
					{...this.state}
				/>
				<Form getMethod={this.gettingInfo} />
				<Api />
			</div>
		)
	}
}

export default App;