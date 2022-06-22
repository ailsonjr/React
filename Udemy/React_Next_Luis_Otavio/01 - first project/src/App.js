import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handlePClick = this.handlePClick.bind(this);

  //   this.state = {
  //     name: "Ailson Lima",
  //     counter: 0
  //   };
  // }

  state = {
    name: "Ailson Lima",
    counter: 0
  };

  handlePClick = () => {
    this.setState({ name: 'Full name: Ailson Pacheco Lima Junior' });
    // const { name } = this.state;
    // console.log(`Clicked on name ${name}`);
    // console.log(`Clicked on name`);
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p onClick={() => console.log(`Clicked on name`)}> */}
          <p
            onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            This is the link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
