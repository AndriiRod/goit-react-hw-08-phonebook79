import { Nav, NavLinkWrap, Counter, Header } from './AppBar.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { selectUserName } from 'redux/auth/auth-selectors';
import { logoutUser } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const AppBar = () => {
  const contacts = useSelector(selectContacts);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  const huddleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Header>
      <Nav>
        <NavLinkWrap to="/contacts">
          Contacts <Counter>{contacts.length}</Counter>
        </NavLinkWrap>
        <NavLinkWrap to="/addContact">Add New Contact</NavLinkWrap>
        <p>{userName}</p>
        <button onClick={huddleLogout} type="button">
          Logout
        </button>
      </Nav>
    </Header>
  );
};

export default AppBar;
