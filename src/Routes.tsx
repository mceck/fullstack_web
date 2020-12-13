import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { AuthRoute } from './authentication';
import { Navbar } from './components/Navbar';
import { Home } from './screens/Home';
import { Login } from './screens/Login';
import { Signup } from './screens/Signup';
import { Test } from './screens/Test';

const AppFrame = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.text.p.fontSize};
  font-weight: ${({ theme }) => theme.text.p.fontWeight};
  transition: all ease 500ms;
  overflow-y: auto;
`;

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <AppFrame>
        <Navbar />
        <Switch>
          <AuthRoute exact path="/" component={<Home />} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <AuthRoute path="/test" component={<Test />} />
        </Switch>
      </AppFrame>
    </BrowserRouter>
  );
};
