import './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectAllTasks, selectLoading } from 'redux/tasks/selectors';
import { deleteTask } from 'redux/tasks/operations';
import { getFilter } from 'redux/filter/selectors';
import { useEffect } from 'react';

export const ContactList = () => {
  const isLoading = useSelector(selectLoading);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllTasks);
  const visibleContact = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // useEffect(() => {}, filter);

  return (
    <ul>
      {visibleContact.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}:</span>
          <span> {number}</span>
          <button onClick={() => dispatch(deleteTask(id))}>
            {isLoading ? 'Deleting...' : 'Delete'}
          </button>
        </li>
      ))}
    </ul>
  );
};
