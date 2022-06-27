import './styles.css';

import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard
        body={post.body}
        cover={post.cover}
        key={post.id}
        title={post.title}
      />
    ))}
  </div>
);