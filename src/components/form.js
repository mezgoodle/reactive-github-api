import React from "react";

const Form = props => (
  <form onSubmit={props.getMethod}>
    <input
      className="form-control"
      type="text"
      name="user"
      placeholder="Username"
    />
    <button className="mt-2 btn btn-primary">Get information</button>
  </form>
);

export default Form;
