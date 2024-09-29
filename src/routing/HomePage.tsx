import { Link } from 'react-router-dom';

const HomePage = () => {
  // throw new Error('Something failed');

  return (
    <>
      <p>
        Hello world!
      </p>
      <Link to="/users">Users</Link>
      {/* <a href='/users'>Users</a> */}
    </>
  );
};

export default HomePage;
