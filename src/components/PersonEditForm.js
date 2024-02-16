import React, { useState } from 'react';
import axios from 'axios';

const PersonEditForm = ({ person, fetchData, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    first_name: person.first_name,
    last_name: person.last_name,
    email: person.email,
    address: person.address,
    phone: person.phone
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/people/${person.id}`, formData);
      fetchData();
      onCancelEdit(); 
    } catch (error) {
      console.error('Error updating person:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      <input type="email" name="email" value={formData.email} onChange={handleChange} />
      <input type="text" name="address" value={formData.address} onChange={handleChange} />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
};

export default PersonEditForm;
