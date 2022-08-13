import classes from './Auth.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store/auth';


const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login())
  };

  return (
      <section>
        {isAuthenticated ||<form className={classes.auth}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>}
      </section>
  );
};

export default Auth;
