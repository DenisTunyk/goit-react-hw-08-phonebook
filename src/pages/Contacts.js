import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTasks } from 'redux/tasks/operations';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <br></br>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
