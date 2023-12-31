import { useSelector, useDispatch } from 'react-redux';
import { Input, Label, Icon } from './FindField.styled';

import { selectFilter } from 'redux/contacts/selectors';
import { search } from 'redux/contacts/filter-slice';

const FindField = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const onChangeHuddler = e => {
    dispatch(search(e.target.value));
  };

  return (
    <Label>
      <Icon />
      <Input
        placeholder="Contacts"
        type="text"
        value={value}
        onChange={onChangeHuddler}
      />
    </Label>
  );
};

export default FindField;
