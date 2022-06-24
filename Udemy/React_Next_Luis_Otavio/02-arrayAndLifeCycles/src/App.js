import './App.css';
import { Component } from 'react';

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

  componentDidMount() {
    this.loadPosts();
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(posts => this.setState({ posts }));
    // this.handleTimeout();
  };

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndPhotos });
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
        <div className="posts">
          {posts.map(post => (
            <div className='post'>
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
