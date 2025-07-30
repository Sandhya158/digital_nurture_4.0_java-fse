import React from 'react';

const courses = [
  { id: 'C1', name: "React Bootcamp", duration: "3 months" },
  { id: 'C2', name: "Full Stack Development", duration: "6 months" },
  { id: 'C3', name: "Data Structures", duration: "2 months" }
];

function CourseDetails() {
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            🎓 <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
