import React from "react";
import "./styles.css";
import axios from "axios";
import CircleForm from "./components/CircleForm";
import Circle from "./components/Circle";

export const CIRCLE_SERVER_URL = "localhost:4001";

export default class App extends React.Component {
  state = {
    circles: []
  };

  componentDidMount() {
    this.loadCircles();
  }

  addCircle = circle => {
    axios.post(`${CIRCLE_SERVER_URL}/circles`, circle).then(() => {
      this.loadCircles();
    });
  };

  loadCircles() {
    axios
      .get(`${CIRCLE_SERVER_URL}/circles`)
      .then(({ data }) => {
        this.setState({ circles: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div id="dashboard">
          {this.state.circles.map((circel, index) => (
            <Circle key={index} circle={circel} />
          ))}
        </div>
        <CircleForm addCircle={this.addCircle} />
      </div>
    );
  }
}
