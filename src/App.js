import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Api from "./components/api_info";

class App extends React.Component {
  state = {
    login: undefined,
    html_url: undefined,
    public_repos: undefined,
    repos: undefined,
    error: undefined
  };

  gettingInfo = async e => {
    e.preventDefault();
    const user = e.target.elements.user.value;

    if (user) {
      const api_url = await fetch(`https://api.github.com/users/${user}`);
      const data = await api_url.json();
      const repos_url = await fetch(
        `https://api.github.com/users/${user}/repos`
      );
      const repos = await repos_url.json();
      this.setState({
        login: data.login,
        html_url: data.html_url,
        public_repos: data.public_repos,
        repos: repos,
        error: undefined
      });
    } else {
      this.setState({
        login: undefined,
        html_url: undefined,
        public_repos: undefined,
        repos: undefined,
        error: "Enter username"
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Api />
        <Form getMethod={this.gettingInfo} />
        <Info {...this.state} />
      </div>
    );
  }
}

export default App;
