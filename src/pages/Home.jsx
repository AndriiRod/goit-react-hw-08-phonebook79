import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = route => {
    navigate(route);
  };
  return (
    <div>
      <button type="button" onClick={() => handleClick('reg')}>
        Create Account
      </button>
      <button type="button" onClick={() => handleClick('log')}>
        Login
      </button>

      <Outlet />
    </div>
  );
};

export default Home;
