import React, { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "doremolls",
    };
    console.log("LifeCycleB constructor");
  }
  static getDerivedStateFromProps(props) {
    console.log("LifeCycleB getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log('LifeCycleB render');
    return <div />;
  }

  componentDidMount(){
    console.log('LifeCycleB componentDidMount');
  }
}

export default LifeCycleB;
