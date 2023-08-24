import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  Section,
  Header,
  Nav,
  NavLinkWrap,
  Counter,
} from './SharedLayout.styled';
import { selectContacts, selectError } from 'redux/selectors';

const SharedLayout = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  error && toast.error(error);
  return (
    <Section>
      <Header>
        <Nav>
          <NavLinkWrap to="/">
            Contacts <Counter>{contacts.length}</Counter>
          </NavLinkWrap>
          <NavLinkWrap to="/addContact">Add New Contact</NavLinkWrap>
        </Nav>
      </Header>
      <Outlet />
    </Section>
  );
};

export default SharedLayout;
