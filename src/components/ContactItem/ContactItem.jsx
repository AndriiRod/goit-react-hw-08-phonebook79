import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

import {
  Item,
  Name,
  Number,
  Img,
  TextWrap,
  DeleteBtn,
  Icon,
} from './ContactItem.styled';

import placeholder from '../../images/placeholder.png';

const ContactItem = ({ id, name, number, avatar }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Img src={avatar ? avatar : placeholder} alt="avatar" />
      <TextWrap>
        <Name>{name}</Name>
        <Number>{number}</Number>
      </TextWrap>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
        <Icon />
      </DeleteBtn>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
