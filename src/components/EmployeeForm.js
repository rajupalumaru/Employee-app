import React, { useState, useEffect } from 'react';

const EmployeeForm = ({ onSave, selectedEmployee, onCancel }) => {
  const [employee, setEmployee] = useState({
    name: '',
    gender: '',
    department: '',
    dob: ''
  });

  useEffect(() => {
    if (selectedEmployee) setEmployee(selectedEmployee);
  }, [selectedEmployee]);

  const handleChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(employee);
    setEmployee({ name: '', gender: '', department: '', dob: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input className="form-control mb-2" name="name" value={employee.name} onChange={handleChange} placeholder="Name" required />
      <input className="form-control mb-2" name="gender" value={employee.gender} onChange={handleChange} placeholder="Gender" required />
      <input className="form-control mb-2" name="department" value={employee.department} onChange={handleChange} placeholder="Department" required />
      <input className="form-control mb-2" name="dob" type="date" value={employee.dob} onChange={handleChange} required />
      <button className="btn btn-primary me-2" type="submit">Save</button>
      {selectedEmployee && <button className="btn btn-secondary" onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default EmployeeForm;
