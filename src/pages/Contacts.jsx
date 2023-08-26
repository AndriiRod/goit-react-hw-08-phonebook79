import ContactsList from 'components/ContactsList/';
import FindField from 'components/FindField/';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <FindField />
      <ContactsList />
    </>
  );
};

export default Contacts;
