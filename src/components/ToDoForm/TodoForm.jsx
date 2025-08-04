import styles from './TodoForm.module.css';
import { useState } from 'react';
import { PRIORITY_DEFAULT } from '../../constants/priority';
import { ToDoFormFields } from '../ToDoFormFields/ToDoFormFields';
import { useForm } from 'react-hook-form';
import { getTodoSchema } from '../schemas/todo';
import { yupResolver } from '@hookform/resolvers/yup';

export function TodoForm({onCreate}) {

  const { register, handleSubmit, reset, formState: {errors} } = useForm({
    resolver: yupResolver(getTodoSchema({ isNew: true })),
    defaultValues: {
      description: '',
      deadline: '',
      priority: PRIORITY_DEFAULT,
      completed: false,
    }
  });

  const [showAllFields, setShowAllFields] = useState(true);

    function handleCreate(data) {
        onCreate(data);
        reset();
    }

  return (
    <section>
      <div className={styles.Header}>
        <h3 className={styles.Title}>New To-Do</h3>
        <button
          className={styles.ToggleFieldsButton}
          onClick={() => setShowAllFields(!showAllFields)}
        >
          {showAllFields ? "Hide" : "Show"} all fields
        </button>
      </div>
      <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
        <ToDoFormFields showAllFields={showAllFields} register={register} errors={errors}/>
        <input type="submit" value="Add" />
      </form>
    </section>
  );
}