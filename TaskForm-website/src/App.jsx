import React from 'react';
import TaskColumn from './components/TaskColumn';
import todoIcon from "./assets/target.jpg";
import doingIcon from "./assets/doing.jpg.webp";
import doneIcon from "./assets/done.png";

import "./App.css";
import TaskForm from './components/taskForm';

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn title="To do" icon={todoIcon} />
        <TaskColumn title="Doing" icon={doingIcon} />
        <TaskColumn title="Done" icon={doneIcon} />
      </main>
    </div>
  );
};

export default App