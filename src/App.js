import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Api from "./components/api_info";

class App extends React.Component {
	render() {
		return (
			<div>
				<Info />
				<Form />
				<Api />
			</div>
		)
	}
}

export default App;