import React, { Component } from "react";

import Header from "./components/Header";
import Posts from "./pages/Posts"
import "./style.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Posts />;
      </>
    );
  }
}

export default App;
