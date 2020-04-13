import React from "react";

// must be equal to the tracksize (defined over properties grid-auto-rows and grid-template-columns)
// in style.css
const BASE_GRID_TRACK_SIZE = 10;

export default class PreviewCircle extends React.Component {
  render() {
    const circle = this.props.circle;
    return (
      <div
        className="circle"
        style={{
          background: circle.color,
          width: `${circle.size * BASE_GRID_TRACK_SIZE}px`,
          height: `${circle.size * BASE_GRID_TRACK_SIZE}px`
        }}
      />
    );
  }
}
