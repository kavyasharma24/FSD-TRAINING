import React from "react";
function Student({ data }) {
  return (
    <div>
      <h1>Student Info</h1>
      <img src={data.pic} alt="student" height="200px" width="200px" style={{borderRadius: "50%"}} />
      <h2>Name: {data.name}</h2>
      <h2>Age: {data.age}</h2>
      <h2>Course: {data.course}</h2>
      <h2>Year: {data.year}</h2>
      <h2>University: {data.university}</h2>
    </div>
  );
}

export default Student;