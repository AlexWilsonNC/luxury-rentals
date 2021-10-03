const loginEl = document.querySelector('#login');
const signUpEl = document.querySelector('#signup');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-value').value.trim();
  const password = document.querySelector('#login-pw').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signUpFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#signup-value').value.trim();
  const password = document.querySelector('#signup-pw').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const responseLogin = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (responseLogin.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    } else {
      alert('Failed to sign up');
    }
  }
};

loginEl.addEventListener('submit', loginFormHandler);
signUpEl.addEventListener('submit', signUpFormHandler);
