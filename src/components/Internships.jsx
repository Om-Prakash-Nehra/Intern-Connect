import React, { useEffect, useState } from "react";

const Internships = () => {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    fetch("http://localhost/Php/internships.php")
      .then((response) => response.json())
      .then((data) => setInternships(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Available Internships</h2>
      {internships.length === 0 ? (
        <p>No internships available.</p>
      ) : (
        <ul>
  {internships.map((internship) => (
    <li key={internship.id}>
      <h3>{internship.title}</h3>
      <p><strong>Company:</strong> {internship.company}</p>
      <p><strong>Location:</strong> {internship.location || 'N/A'}</p>
      <p><strong>Type:</strong> {internship.type || 'N/A'}</p>
      <p><strong>Stipend:</strong> {internship.stipend || 'Unpaid'}</p>
      <p><strong>Description:</strong> {internship.description}</p>
      <p><strong>Posted on:</strong> {internship.posted_on}</p>
    </li>
  ))}
</ul>

      )}
    </div>
  );
};

export default Internships;
