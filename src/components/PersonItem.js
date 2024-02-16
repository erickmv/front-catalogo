import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const PersonItem = ({ person, fetchData, onEdit }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    first_name: person.first_name,
    last_name: person.last_name,
    email: person.email,
    address: person.address,
    phone: person.phone
  });

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/people/${person.id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting person:', error);
    }
  };

  const handleEdit = () => {
    onEdit(person);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/api/people/${person.id}`, formData);
      fetchData();
      handleCloseModal();
    } catch (error) {
      console.error('Error updating person:', error);
    }
  };

  return (
    <div className='card mt-3 mb-3 p-4'>
      <p>{person.first_name} {person.last_name}</p>
      <p>Email: {person.email}</p>
      <p>Address: {person.address}</p>
      <p>Phone: {person.phone}</p>
      <div className="" role="" aria-label="Basic example">
        <button type="button" className="btn btn-primary mr-2" onClick={handleEdit}>Edit</button>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>Edit Person</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" name="first_name" value={formData.first_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="last_name" value={formData.last_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary mr-2">Update</button>
          <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default PersonItem;
