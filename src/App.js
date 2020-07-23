import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Api from "./components/api_info";

class App extends React.Component {
	gettingInfo = async (e) => {
		e.preventDefault();
		const user = e.target.elements.user.value;
		const api_url = await fetch(`https://api.github.com/users/${user}`);
		const data = await api_url.json();
		console.log(data)
	}

	render() {
		return (
			<div>
				<Info />
				<Form getMethod={this.gettingInfo} />
				<Api />
			</div>
		)
	}
}

export default App;