import React from 'react';
import TaskColumn from './components/TaskColumn';

import "./App.css";
import TaskForm from './components/taskForm';

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className='app_main'>
        <TaskColumn />
        <section className='task_column'>Section 2</section>
        <section className='task_column'>Section 3</section>
      </main>
    </div>
  );
};

export default App