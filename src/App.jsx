import styles from './App.module.css';
import { TodoForm } from './components/ToDoForm/TodoForm.jsx';
import { ToDoList } from './components/ToDoList/ToDoList.jsx';
import { TodoFilters } from './components/TodoFilters/TodoFilters.jsx';
import { useTodos } from './hooks/todo.js';
import { Alert } from './components/Alert/Alert.jsx';
import { Loader } from './components/Loader/Loader.jsx';

function App() {

  const todos = useTodos();

  return(
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='/to-do.png'/>
        <h2 className={styles.Title}>To Do App</h2>
      </header>

      <div className={styles.AppContainer}>
        {todos.isLoading && <Loader />}
        {!!todos.error.message && (
          <Alert onClear={todos.error.clear}>
            {todos.error.message}
          </Alert>
        )}
        <TodoForm onCreate={todos.create}/>
        <TodoFilters onFilter={todos.filter}/>
        <ToDoList todos={todos.data} onUpdate={todos.update} onDelete={todos.delete}/>
      </div>
    </div>
  )
}

export default App
