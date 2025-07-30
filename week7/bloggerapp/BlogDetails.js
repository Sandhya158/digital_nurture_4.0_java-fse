import React from 'react';

const blogs = [
  { id: 1, title: "React Tips", date: "2024-01-10" },
  { id: 2, title: "Why Learn JavaScript?", date: "2024-03-21" },
  { id: 3, title: "CSS in 2025", date: "2024-07-01" }
];

function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            📝 <strong>{blog.title}</strong> ({blog.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
