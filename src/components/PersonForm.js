import React, { useState } from 'react';

const PersonForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      phone: ''
    });
  };

  return (
    <div>
    <div className="card mt-3 p-3 mb-4">
      <h2>Add Person</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
    </div>
  );
};

export default PersonForm;
