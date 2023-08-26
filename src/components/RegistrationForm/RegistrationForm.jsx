import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createNewUser } from 'redux/auth/auth-operations';

import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const inputNameId = nanoid(6);
  const inputEmailId = nanoid(6);
  const inputPassId = nanoid(6);

  const handleSubmitForm = async data => {
    dispatch(createNewUser(data));
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <label htmlFor="inputNameId">Name</label>
      <input
        id={inputNameId}
        type="text"
        {...register('name', { required: true })}
      />
      <label htmlFor="inputEmailId">Email</label>
      <input
        id={inputEmailId}
        type="email"
        {...register('email', { required: true })}
      />
      <label htmlFor="inputPassId">Password</label>
      <input
        id={inputPassId}
        type="password"
        {...register('password', { required: true })}
      />
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;
