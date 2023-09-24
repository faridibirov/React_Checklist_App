import './App.css';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import Checklist from './Components/Checklist/Checklist';
import { useReducer } from 'react';

const updater = (state, action) => {
  switch(action.type) {
    case 'addTask':
      return [...state, action.payload]; // state.push(action.payload);
    case 'deleteTask':
      // return [...state(0, 3), ...state(5, end)]
  }

  throw new Error('Undefined action type');
}

function App() {
  const [tasks, dispatchTasks] = useReducer(updater, []);



  return (
    <>
      <Form onSubmit={(taskData) => dispatchTasks({type: 'addTask', payload: taskData})}></Form>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Remainded</Button>
      <Checklist tasks={tasks}/>
    </>
  );
}

export default App;
