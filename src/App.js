import React, { useEffect, useState } from 'react';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from './api';
import EmployeeTable from './components/EmployeeTable';
import EmployeeForm from './components/EmployeeForm';

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSave = async (employee) => {
    if (employee.id) {
      await updateEmployee(employee.id, employee);
    } else {
      await addEmployee(employee);
    }
    setEditingEmployee(null);
    fetchEmployees();
  };

  const handleEdit = (emp) => {
    setEditingEmployee(emp);
    console.log("hi");
  
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees();
  };

  const handleCancel = () => {
    setEditingEmployee(null);
    
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee Management</h2>
      <EmployeeForm onSave={handleSave} selectedEmployee={editingEmployee} onCancel={handleCancel} />
      <EmployeeTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
