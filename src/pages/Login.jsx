import LoginFrom from 'components/LoginFrom/';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <>
      <LoginFrom />
    </>
  );
};

export default Login;
