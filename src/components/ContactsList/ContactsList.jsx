import ContactItem from 'components/ContactItem/';

import { useSelector } from 'react-redux';

import { selectStatus, selectVisibleContact } from 'redux/contacts/selectors';

import { List } from './ContactsList.styled';
import Loader from 'components/Loader/Loader';

const ContactsList = () => {
  const status = useSelector(selectStatus);

  const visibleContact = useSelector(selectVisibleContact);

  return (
    <>
      {status && <Loader />}
      {visibleContact.length !== 0 && (
        <List>
          {visibleContact.map(({ id, name, number, avatar }) => (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              avatar={avatar}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactsList;
