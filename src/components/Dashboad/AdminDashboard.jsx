import React from 'react'
import Header from '../Other/Header';
import CreateTask from '../Other/CreateTask';
import AllTask from '../Other/AllTask';

const AdminDashboard = (props) => {
  return (

    <div className="min-h-screen bg-black text-white p-10">
        <Header changeUser={props.changeUser} />
        <CreateTask/>
        <AllTask/>
    </div>
  );
};


export default AdminDashboard