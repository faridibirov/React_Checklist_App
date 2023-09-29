import { useId } from 'react';
import Button from '../../Button/Button';
import { deleteTask } from '../../../app/slices/checklistSlice';
import { useDispatch } from 'react-redux';


function ChecklistItem({
    taskData, 

}) {
    const id = useId();
    const dispatch = useDispatch();

   
    return (
        <li>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button clickHandler={()=>dispatch(deleteTask(taskData.id))}>Delete</Button>
        </li>
    )
}

export default ChecklistItem;