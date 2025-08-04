import styles from './ToDoList.module.css';
import { TodoListItem } from '../TodoListItem/TodoListItem.jsx';

export function ToDoList({ todos, onUpdate, onDelete }) {
  return (
    <section>
        <h3>To-Do's</h3>
        <p>
          {todos.length === 0 && (
            "You don't have any to-do's. Add some!"
          )}
        </p>
        <ul className={styles.ToDoList}>
          {todos.map((todo) => 
            <TodoListItem key={todo.id} todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
            )}
        </ul>
    </section>
  );
}