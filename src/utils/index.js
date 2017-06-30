import { AUTH_USER } from 'actions/types';

export const setInitialStyles = () => {
  const html = document.documentElement.style;
  html.minHeight = '100%';
  html.position = 'relative';
  html.paddingTop = '70px';
  html.paddingBottom = '160px';
};

export const checkToken = (store) => {
  const token = localStorage.getItem('token');

  if (token) {
    store.dispatch({ type: AUTH_USER });
  }
};
