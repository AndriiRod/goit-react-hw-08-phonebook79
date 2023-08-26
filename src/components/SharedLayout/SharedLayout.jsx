import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import {
  Header,
  Nav,
  NavLinkWrap,
  Counter,
  Container,
} from './SharedLayout.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { selectUserStatus, selectUserName } from 'redux/auth/auth-selectors';
import { logoutUser } from 'redux/auth/auth-operations';

const SharedLayout = () => {
  const contacts = useSelector(selectContacts);
  const status = useSelector(selectUserStatus);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const huddleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Container>
      <Header>
        {status && (
          <Nav>
            <NavLinkWrap to="/">
              Contacts <Counter>{contacts.length}</Counter>
            </NavLinkWrap>
            <NavLinkWrap to="/addContact">Add New Contact</NavLinkWrap>
            <p>{userName}</p>
            <button onClick={huddleLogout} type="button">
              Logout
            </button>
          </Nav>
        )}
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
