import React from 'react';

const EmployeeTable = ({ employees, onEdit, onDelete }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>DOB</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {employees.map(emp => (
        <tr key={emp.id}>
          <td>{emp.name}</td>
          <td>{emp.gender}</td>
          <td>{emp.department}</td>
          <td>{emp.dob}</td>
          <td>
            <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(emp)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(emp.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default EmployeeTable;
