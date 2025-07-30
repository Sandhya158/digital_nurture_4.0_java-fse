
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      error: null,
    };
  }

  // Step 6: Fetch data from API
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
        throw err;
      });
  }

  // Step 7: Lifecycle method after mount
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Lifecycle method for catching errors
  componentDidCatch(error, info) {
    this.setState({ hasError: true, error });
    alert("Something went wrong: " + error.message);
  }

  // Step 8: Render posts
  render() {
    if (this.state.hasError) {
      return <h2>Error loading posts.</h2>;
    }

    return (
      <div>
        <h2>Posts</h2>
        {this.state.posts.slice(0, 10).map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
