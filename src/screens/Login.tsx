import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { setAccessToken, User, useUser } from 'src/authentication';
import { useLoginMutation } from 'src/generated/graphql';
import { Pad, Text } from 'src/styles/style';
import { useTheme } from 'styled-components';

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const { user, setUser } = useUser();
  const theme = useTheme();
  const [authError, setAuthError] = useState<string | null>(null);
  const { register, handleSubmit, errors } = useForm();
  const [login] = useLoginMutation();

  const onSubmit = async ({ username, password }: any) => {
    setAuthError(null);
    try {
      const result = await login({
        variables: {
          username,
          password,
        },
      });
      console.log(result);
      if (result.errors || !result.data) return;
      const token = result.data.login.token;
      setAccessToken(token);
      const user = jwtDecode<User>(token);
      user.authenticated = true;
      setUser(user);
      history.push('/');
    } catch (error) {
      console.log(error);
      setAuthError(error.toString());
    }
  };

  if (user.authenticated) return <Redirect to="/" />;

  return (
    <Pad themeDefault>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({
            required: 'Campo obbligatorio',
            minLength: { message: 'Inserisci un username valido', value: 3 },
          })}
          name="username"
          placeholder="Username or email"
        />
        {errors.username && (
          <Text color={theme.colors.error}>{errors.username.message}</Text>
        )}

        <input
          ref={register({ required: 'Campo obbligatorio' })}
          name="password"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <Text color={theme.colors.error}>{errors.password.message}</Text>
        )}

        <input type="submit" value="Login" />
        {authError && <Text color={theme.colors.error}>{authError}</Text>}
      </form>
    </Pad>
  );
};
