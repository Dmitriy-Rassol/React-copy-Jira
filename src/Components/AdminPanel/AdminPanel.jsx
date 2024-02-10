import { useEffect, useState } from "react";
import CreateTask from "./CreateTask/CreateTask";
import CreateTaskSprint from "./CreateTaskSprint/CreateTaskSprint";
import CreateUser from './CreateUser/CreateUser';
import './AdminPanel.scss';
const AdminPanel = () => {
 
  return (
    <>
      <CreateTask/>
  
       <CreateTaskSprint/>

       <CreateUser/>
    </>
  );
};

export default AdminPanel;
