import jwtDecode from 'jwt-decode';
import React, { useState, useEffect } from 'react';
import { setAccessToken, User, useUser } from './authentication';
import { API_URL } from './constants';
import { Routes } from './Routes';

export const App: React.FC = () => {
  const { setUser } = useUser();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const result = await fetch(`${API_URL}/api/refresh-token`, {
          method: 'POST',
          credentials: 'include',
        });
        const data = await result.json();
        if (data.ok && data.token) {
          setAccessToken(data.token);
          const user = jwtDecode<User>(data.token);
          user.authenticated = true;
          setUser(user);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);
  if (loading) return <div>Loading...</div>;
  return <Routes />;
};
