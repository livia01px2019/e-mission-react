import React from "react";
import "./App.css";
import Converter from "./Converter";
import ReactDOM from "react-dom";
import logo from "./logo.png";

import Tabs from "./Tabs";
require("./styles.css");
{
  /*import Header from "./Header"; 
import CSVReader from "react-csv-reader";*/
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        ["lamb", 39.2],
        ["beef", 27.0],
        ["cheese", 13.5],
        ["pork", 12.1],
        ["turkey", 10.9],
        ["chicken", 6.9],
        ["tuna", 6.1],
        ["eggs", 4.8],
        ["potatoes", 2.9],
        ["rice", 2.7],
        ["nuts", 2.3],
        ["beans/tofu", 2.0],
        ["vegetables", 2.0],
        ["milk", 2.0],
        ["fruit", 1.1],
        ["lentils", 0.9]
      ]
    };
  }

  handleData(data) {
    this.setState({ food: data });
  }
  render() {
    return (
      <div className="content">
        {/* TODO: add a Header Component <Header title="E-Mission" /> */}
        <img src={logo} alt="logo" className="image" />

        {/* TODO: add a Converter Component 
        <div className="file-loader">
          <CSVReader onFileLoaded={data => this.handleData(data)} />
        </div>
        */}
        <Tabs>
          <div label="Individual Foods">
            <Converter foodData={this.state.food} />
          </div>
          <div label="Log Your Meal">Log meal here :)</div>
        </Tabs>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
