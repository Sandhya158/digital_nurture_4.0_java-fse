import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [section, setSection] = useState('book'); // book | blog | course

  let content;
  // Element variable approach
  if (section === 'book') {
    content = <BookDetails />;
  } else if (section === 'blog') {
    content = <BlogDetails />;
  } else {
    content = <CourseDetails />;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Blogger App</h1>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => setSection('book')}>Show Book Details</button>
        <button onClick={() => setSection('blog')} style={{ marginLeft: '10px' }}>Show Blog Details</button>
        <button onClick={() => setSection('course')} style={{ marginLeft: '10px' }}>Show Course Details</button>
      </div>

      {content}

      {/* Ternary operator example */}
      <p style={{ marginTop: '20px' }}>
        {section === 'book' 
          ? 'Currently showing book details.' 
          : section === 'blog' 
          ? 'Currently showing blog details.' 
          : 'Currently showing course details.'
        }
      </p>

      {/* AND operator example */}
      {section === 'course' && <p>Explore our best-selling courses now!</p>}
    </div>
  );
}

export default App;
