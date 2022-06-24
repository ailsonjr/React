import './App.css';

import { Component } from 'react';

import { loadPosts } from './utils/loadPosts';
import { Posts } from './components/Posts';

class App extends Component {
  state = {
    posts: []

    /*counter: 0,
    posts: [
      {
        id: 1,
        title: 'Title 1',
        body: 'Body 1'
      },
      {
        id: 2,
        title: 'Title 2',
        body: 'Body 2'
      },
      {
        id: 3,
        title: 'Title 3',
        body: 'Body 3'
      }
    ]*/
  };
  // timeoutUpdate = null;

  async componentDidMount() {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(posts => this.setState({ posts }));
    // this.handleTimeout();
  };

  componentDidUpdate() {
    // this.handleTimeout();
  };

  componentWillUnmount() {
    // clearTimeout(this.timeoutUpdate);
  };

  /*handleTimeout() {
    const { posts, counter } = this.state;
    posts[0].title = 'The title change';
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 2000)
  }*/

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
