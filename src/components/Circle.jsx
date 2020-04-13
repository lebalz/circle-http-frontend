import React from "react";

export default class Circle extends React.Component {
  render() {
    const circle = this.props.circle;
    return (
      <div
        className="circle"
        style={{
          background: circle.color,
          gridRow: `span ${circle.size}`,
          gridColumn: `span ${circle.size}`
        }}
      />
    );
  }
}
