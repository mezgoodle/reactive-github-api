import React from "react";

const Form = (props) => (
	<form onSubmit={props.getMethod}>
		<input type="text" name="user" placeholder="Username" />
		<button>Get information</button>
	</form>
)

export default Form;
