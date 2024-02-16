import React from 'react';
import PersonItem from './PersonItem';

const PersonList = ({ people, fetchData, onEdit }) => {
  return (
    <div>
      <h2>List of People</h2>
      {people.map(person => (
        <PersonItem key={person.id} person={person} fetchData={fetchData} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PersonList;
