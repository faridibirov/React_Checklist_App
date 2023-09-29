import { useId } from 'react';
import Button from '../../Button/Button';
import { deleteTask } from '../../../app/slices/checklistSlice';


function ChecklistItem({
    taskData, 
    dispatchDelete
}) {
    const id = useId();

    const handleDeleteClick = ()=> {
        dispatchDelete(deleteTask(taskData))
    }

    return (
        <li>
            <input type="checkbox" id={id}/>
            <label htmlFor={id}>{taskData.title}</label>
            <Button>Edit</Button>
            <Button clickHandler={handleDeleteClick}>Delete</Button>
        </li>
    )
}

export default ChecklistItem;