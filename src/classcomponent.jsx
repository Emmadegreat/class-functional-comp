import { Component } from 'react';

class ExampleClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };


  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button style={{margin:"0rem 0.4rem"}} onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>

    );
  }
}

export default ExampleClassComponent;
