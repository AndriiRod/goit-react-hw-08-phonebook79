import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/auth-operations';

const LoginFrom = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const inputEmailId = nanoid(6);
  const inputPassId = nanoid(6);

  const handleSubmitForm = async data => {
    dispatch(loginUser(data));
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginFrom;
