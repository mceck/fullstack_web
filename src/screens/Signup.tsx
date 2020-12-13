import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { useUser } from 'src/authentication';
import { EMAIL_REGEX } from 'src/constants';
import { useSignupMutation } from 'src/generated/graphql';
import { Pad, Text } from 'src/styles/style';
import { useTheme } from 'styled-components';

export const Signup: React.FC<RouteComponentProps> = ({ history }) => {
  const { user } = useUser();
  const theme = useTheme();
  const [authError, setAuthError] = useState<string | null>(null);
  const { register, handleSubmit, errors } = useForm();
  const [signup] = useSignupMutation();

  const onSubmit = async ({ username, email, password }: any) => {
    setAuthError(null);
    try {
      const result = await signup({
        variables: {
          username,
          email,
          password,
        },
      });
      console.log(result);
      if (result.data?.signup) {
        history.push('/login');
      } else {
        setAuthError('Errore durante la registrazione');
      }
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
          placeholder="Username"
        />
        {errors.username && (
          <Text color={theme.colors.error}>{errors.username.message}</Text>
        )}
        <input
          ref={register({
            required: 'Campo obbligatorio',
            pattern: {
              message: 'Inserisci una email valida',
              value: EMAIL_REGEX,
            },
          })}
          name="email"
          placeholder="Email"
        />
        {errors.email && (
          <Text color={theme.colors.error}>{errors.email.message}</Text>
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

        <input type="submit" value="Signup" />
        {authError && <Text color={theme.colors.error}>{authError}</Text>}
      </form>
    </Pad>
  );
};
