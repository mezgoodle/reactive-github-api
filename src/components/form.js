import React from "react";

class Form extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.getMethod}>
				<input type="text" name="user" placeholder="Username" />
				<button>Get information</button>
			</form>
		)
	}
}

export default Form;
