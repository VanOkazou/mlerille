// @flow
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Screen from '../../components/screen';
import Div from '../../components/div';
import Text from '../../components/text';
import { LoginInput, LoginForm } from './Login.style';
import { login } from '../../actions/login';
import { HOME_PATH } from '../../constants';

type Props = {
  isLogged: Boolean,
  error: boolean,
  onLogin: Function,
}

function Login(props: Props) {
  const { isLogged, error, onLogin, ...rest } = props;
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(value);
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  if (isLogged || localStorage.getItem('isLogged')) {
    return <Redirect to={HOME_PATH} />;
  };

  return (
    <Screen height="100vh" {...rest}>
      <Div
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Text as="H1" fontSize="8rem" fontWeight="bold" margin-bottom="20px" textTransform="uppercase">
          Mehdi Lerille
        </Text>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput value={value} onChange={handleChange} />

          {error && (
          <Text marginTop="40px" color="lightGrey">
            Wrong password !
          </Text>
        )}
        </LoginForm>
      </Div>
    </Screen>
  );
}

function mapStateToProps(state) {
  return {
    isLogged: state.login.isLogged,
    error: state.login.error,
  }
}

Login.displayName = 'Login';
export default connect(mapStateToProps, {
  onLogin: login,
})(Login);
