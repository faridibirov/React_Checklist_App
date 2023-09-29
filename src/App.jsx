import './App.css';
import Form from './Components/Form/Form';
import Button from './Components/Button/Button';
import Checklist from './Components/Checklist/Checklist';
import { useDispatch, useSelector } from 'react-redux';
import {addTask} from './app/slices/checklistSlice';

// const updater = (state, action) => {
//   switch(action.type) {
//     case 'addTask':
//       return [...state, action.payload]; // state.push(action.payload);
//     case 'deleteTask':
//       return  state.filter(task => task.id !== action.payload);
//   }

  // throw new Error('Undefined action type');
// }

function App() {
  // const [tasks, dispatchTasks] = useReducer(updater, []);
  const tasks = useSelector(store=>store.checklistReducer);
  const dispatch = useDispatch();

  /* [{
            id: useId(),
            title: taskTitle
        }]
  */

        console.log(addTask)

  return (
    <>
      <Form onSubmit={(taskData) => dispatch(addTask(taskData))}></Form>
      <Button>All</Button>
      <Button>Done</Button>
      <Button>Remainded</Button>
      <Checklist tasks={tasks} dispatch={dispatch} />
  
    </>
  );
}

export default App;
