import React, { useState } from 'react';

const AddInternship = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
    stipend: '',
    skills_required: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/Php/admin_add_internship.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    });

    if (response.ok) {
      alert('Internship added successfully!');
      setFormData({
        title: '',
        company: '',
        location: '',
        type: '',
        description: '',
        stipend: '',
        skills_required: ''
      });
    } else {
      alert('Failed to add internship.');
    }
  };

  return (
    <div>
      <h2>Add Internship</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="type"
          placeholder="Internship Type (e.g. Full-Time)"
          value={formData.type}
          onChange={handleChange}
          required
        /><br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="stipend"
          placeholder="Stipend"
          value={formData.stipend}
          onChange={handleChange}
          required
        /><br />
        <input
          type="text"
          name="skills_required"
          placeholder="Skills Required (comma-separated)"
          value={formData.skills_required}
          onChange={handleChange}
          required
        /><br />
        <button type="submit">Add Internship</button>
      </form>
    </div>
  );
};

export default AddInternship;
