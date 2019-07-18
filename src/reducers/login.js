import { LOGIN_REQUEST } from '../actions/login';

const initialState = {
  isLogged: false,
  error: false,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      if (action.password !== 'mehdi') {
        return {
          ...state,
          error: true,
        };
      }
      localStorage.setItem('isLogged', true);
      return {
        ...state,
        isLogged: true,
        error: false,
      };
    default:
      return state;
  }
}