import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';

const App = () => {
  const [people, setPeople] = useState([]);
  const [editingPerson, setEditingPerson] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/people');
      setPeople(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async formData => {
    try {
      await axios.post('http://localhost:8000/api/people', formData);
      fetchData();
    } catch (error) {
      console.error('Error adding person:', error);
    }
  };

  const handleEdit = person => {
    setEditingPerson(person);
  };

  const handleCancelEdit = () => {
    setEditingPerson(null);
  };

  return (
    <div className='container'>
      <div className='row'>
        <h1 className='text-center'>Person Catalog</h1>
        <PersonForm onSubmit={handleSubmit} />
        <PersonList people={people} fetchData={fetchData} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default App;
