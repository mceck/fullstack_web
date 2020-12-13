import React from 'react';
import { Link } from 'react-router-dom';
import { useLogoutMutation } from 'src/generated/graphql';
import { setAccessToken, useUser, EmptyUser } from '../authentication';
import { Row } from '../styles/style';

export const Navbar: React.FC = () => {
  const { user, setUser } = useUser();
  const [logout] = useLogoutMutation();
  if (!user.authenticated)
    return (
      <header>
        <Row align="center" justify="flex-end">
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </Row>
      </header>
    );
  return (
    <header>
      <Row align="center" justify="flex-end">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/test">
          <button>Test</button>
        </Link>
        <button
          onClick={async () => {
            if (await logout()) {
              setAccessToken('');
              setUser(EmptyUser);
            }
          }}
        >
          Logout
        </button>
      </Row>
    </header>
  );
};
