import * as Yup from 'yup';
import { PRIORITIES } from '../../constants/priority';

export function getTodoSchema({ isNew=false } = {}) {

    const deadlineRule = Yup.string()
    .nullable()
    .transform((value, originalValue) => originalValue === "" ? null : value )
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Deadline must be in YYYY-MM-DD format');

  return Yup.object().shape({
    name: Yup.string().required('Name is required').min(3, 'Name must be of atleast 3 characters').max(50, 'Name must be at most 50 characters'),
    description: Yup.string().max(200, 'Description must be at most 200 characters'),
    deadline: isNew ? deadlineRule.test('is-future-date', 'Deadline cannot be date in the past', (value) => {
        const today = new Date().toISOString().split('T')[0];
        return value ? value >= today : true;
    }) : deadlineRule,
    priority: Yup.string().oneOf(Object.keys(PRIORITIES), 'Invalid priority'),
    completed: Yup.boolean(),
  });
}