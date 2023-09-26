import { useId } from 'react';
import Button from '../../Button/Button';

function ChecklistItem({
    taskData, 
    dispatchDelete
}) {
    const id = useId();

    const handleDeleteClick = ()=> {
        dispatchDelete({type: 'deleteTask', payload: taskData.id})
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