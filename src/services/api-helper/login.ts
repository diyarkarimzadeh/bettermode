import requestApi from '../request';

export const login = (email: string, password: string) => {
  return requestApi.post({
    url: '/auth/login',
    body: {
      authType: 'user-pass',
      redirect: '/',
      method: '',
      usernameOrEmail: email,
      password,
    },
  });
};
