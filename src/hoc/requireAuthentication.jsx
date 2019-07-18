// @flow
import React, { type ComponentType } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LOGIN_PATH } from '../constants';

type Props = {
  isLogged: boolean,
};

function requireAuthentication(ComposedComponent: ComponentType<*>) {
  function Auth(props: Props) {

    if (props.isLogged || localStorage.getItem('isLogged')) {
      return <ComposedComponent {...props} />;
    }

    return <Redirect to={LOGIN_PATH} />;
  }

  function mapStateToProps(state): Object {
    return {
      isLogged: state.login.isLogged,
    };
  }

  return connect(mapStateToProps)(Auth);
}

export default requireAuthentication;
