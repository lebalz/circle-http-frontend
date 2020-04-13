import React from "react";
import PreviewCircle from "./PreviewCircle";

export default class CircleForm extends React.Component {
  state = {
    circle: { size: 1, color: "#0000ff" }
  };

  addCircle() {
    this.props.addCircle(this.state.circle);
  }

  render() {
    const circle = this.state.circle;
    return (
      <div>
        <form>
          <input
            type="color"
            value={circle.color}
            onChange={e =>
              this.setState({ circle: { ...circle, color: e.target.value } })
            }
          />
          <input
            type="range"
            value={circle.size}
            min="1"
            max="10"
            step="1"
            onChange={e =>
              this.setState({
                circle: { ...circle, size: Number.parseInt(e.target.value, 10) }
              })
            }
          />
        </form>
        <PreviewCircle circle={circle} />
        <button onClick={() => this.addCircle()}>Add</button>
      </div>
    );
  }
}
