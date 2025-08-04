import { PRIORITIES, PRIORITY_DEFAULT } from '../../constants/priority';
import styles from './ToDoFormFields.module.css';

export function ToDoFormFields({ todo={}, showAllFields=true, register, errors={} }) {
  return (
    <div className={styles.FormFields}>
      <div className={styles.FormField}>
        <input
          type="text"
          aria-label="Name*"
          placeholder="Name*"
          autoComplete="off"
          defaultValue={todo.name}
          aria-invalid={!!errors.name}
          {...register('name')}
        />
        {!!errors.name && <span className={styles.FormFieldErrors}>{ errors.name.message }</span>}
      </div>

      {showAllFields && (
        <>
          <div className={styles.FormField}>
            <textarea
              aria-label="Description"
              placeholder="Description"
              rows="3"
              defaultValue={todo.description}
              aria-invalid={!!errors.description}
              {...register('description')}
            />
            {!!errors.description && <span className={styles.FormFieldErrors}>{ errors.description.message }</span>}
          </div>

          <div className={styles.FormGroup}>
            <div className={styles.FormField}>
              <input
                type="date"
                aria-label="Deadline"
                defaultValue={todo.deadline}
                aria-invalid={!!errors.deadline}
                {...register('deadline')}
              />
              {!!errors.deadline && <span className={styles.FormFieldErrors}>{ errors.deadline.message }</span>}
            </div>
            <div className={styles.FormField}>
              <select aria-label="Priority" {...register('priority')}>
                <option value={PRIORITY_DEFAULT}>None</option>
                {Object.entries(PRIORITIES)
                  .filter(([key]) => key !== PRIORITY_DEFAULT)
                  .map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                ))}
              </select>

            </div>
          </div>
        </>
      )}
    </div>
  );
}