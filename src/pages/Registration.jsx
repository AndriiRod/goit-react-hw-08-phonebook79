import RegistrationForm from 'components/RegistrationForm/';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <>
      <RegistrationForm />
    </>
  );
};

export default Registration;
