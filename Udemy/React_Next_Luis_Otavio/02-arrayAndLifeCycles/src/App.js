import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        tittle: 'Tittle 1',
        body: 'Body 1'
      },
      {
        id: 2,
        tittle: 'Tittle 2',
        body: 'Body 2'
      },
      {
        id: 3,
        tittle: 'Tittle 3',
        body: 'Body 3'
      }
    ]
  };
  timeoutUpdate = null;

  componentDidMount() {
    this.handleTimeout();
  }

  componentDidUpdate() {
    this.handleTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate);
  }

  handleTimeout() {
    const { posts, counter } = this.state;
    posts[0].tittle = 'The tittle change';
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 2000)
  }

  render() {
    const { posts, counter } = this.state;
    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.tittle}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;