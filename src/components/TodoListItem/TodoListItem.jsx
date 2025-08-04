import { PRIORITIES, PRIORITY_DEFAULT } from '../../constants/priority';
import { ToDoFormFields } from '../ToDoFormFields/ToDoFormFields';
import styles from './TodoListItem.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getTodoSchema } from '../schemas/todo';
import { yupResolver } from '@hookform/resolvers/yup';

export function TodoListItem({ todo, onUpdate, onDelete }) {

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(getTodoSchema()),
        defaultValues: todo});

    function handleEdit(data) {

        onUpdate(todo.id, data);

        setIsEditing(false);
    }


    const [isEditing, setIsEditing] = useState(false);

    const viewMode = (
        <div className={styles.Content}>
            <input type="checkbox" onChange={handleCompleted} name="completed" checked={todo.completed} className={styles.Status} />
            <div className={styles.Info}>
                {todo.name} <br />
                {todo.description && <span className={styles.Description}>{todo.description}</span>}
                <div className={styles.AdditionalInfo}>
                    {todo.deadline}
                    {todo.priority !== PRIORITY_DEFAULT && (
                        <span style={{color: PRIORITIES[todo.priority].color}}>
                        {PRIORITIES[todo.priority].label}
                        </span>
                    )}
                </div>
            </div>

            <div className={styles.Controls}>
                <button onClick={() => setIsEditing(!isEditing)} >📝</button>
                <button onClick={() => onDelete(todo.id)}>🗑️</button>
            </div>
        </div>
    );

    const editMode = (
        <form className={styles.Content} onReset={() => setIsEditing(false)}
        onSubmit={handleSubmit(handleEdit)}>
            <ToDoFormFields todo={todo} register={register} errors={errors}/>

            <div className={styles.Controls}>
                <input type='submit' value='💾'/>
                <input type='reset' value='❌'/>
            </div>
        </form>
    );

    function handleCompleted(event) {
        onUpdate(todo.id, {...todo, completed: event.target.checked });
    }

  return (
    <li className={styles.TodoListItem} data-completed={todo.completed}>
        {isEditing ? editMode : viewMode}
    </li>
  );
}