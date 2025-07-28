import React, { useState } from 'react';

function Admin() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
    stipend: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/Php/add_internship.php', {
      method: 'POST',
      body: new URLSearchParams(formData),
    });

    const result = await response.json();
    alert(result.success ? 'Internship added successfully!' : 'Failed to add internship.');
  };

  return (
    <div>
      <h2>Add Internship</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="company" placeholder="Company" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />
        <input name="type" placeholder="Type (Full-Time / Part-Time)" onChange={handleChange} required />
        <input name="stipend" placeholder="Stipend (e.g. ₹5000)" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Admin;
