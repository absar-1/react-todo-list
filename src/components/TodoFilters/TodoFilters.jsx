import styles from './TodoFilters.module.css';
import { useEffect, useState } from 'react';
import { COMPLETED_FILTERS, PRIORITY_FILTERS } from '../../constants/filters';

export function TodoFilters({onFilter}) {

    const [completed, setCompleted] = useState('all');
    const [priority, setPriority] = useState('all');

    useEffect(() => {
        const filters = {
            completed: COMPLETED_FILTERS[completed].value,
            priority: PRIORITY_FILTERS[priority].value,
        }

        onFilter(filters);
    }, [completed, priority])

    return (
        <section>
            <h3>Filters</h3>

        <div className={styles.Filters}>
            <div>
                <label htmlFor="completed">Status</label>
                <select id="completed" defaultValue={completed} onChange={(e) => setCompleted(e.target.value)}>
                    {Object.entries(COMPLETED_FILTERS).map(([key, { label }]) => (
                        <option key={key} value={key}>{label}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="priority">Priority</label>
                <select id="priority" defaultValue={priority} onChange={(e) => setPriority(e.target.value)}>
                    {Object.entries(PRIORITY_FILTERS).map(([key, { label }]) => (
                        <option key={key} value={key}>{label}</option>
                    ))}
                </select>
            </div>
        </div>

        </section>
    );
}