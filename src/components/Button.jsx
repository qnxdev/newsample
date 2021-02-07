import { Component } from "react";

class Button extends Component {
  render() {
    function fn2() {
      console.log("a,b");
    }
    const { a, b, fn, children } = this.props;
    return (
      <div onClick={fn} className="Button">
        {a}
        {b}
      </div>
    );
  }
}

export default Button;
