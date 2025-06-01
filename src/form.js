// const showLogin = document.getElementById('show-login');
// const showSignup = document.getElementById('show-signup');
// const loginForm = document.getElementById('login-form');
// const signupForm = document.getElementById('signup-form');

// showLogin.addEventListener('click', () => {
//   loginForm.classList.remove('hidden');
//   signupForm.classList.add('hidden');
//   showLogin.classList.add('active');
//   showSignup.classList.remove('active');
// });

// showSignup.addEventListener('click', () => {
//   signupForm.classList.remove('hidden');
//   loginForm.classList.add('hidden');
//   showSignup.classList.add('active');
//   showLogin.classList.remove('active');
// });

// <!-- login signup script  -->
  const showLogin = document.getElementById('show-login');
  const showSignup = document.getElementById('show-signup');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  showLogin.onclick = () => {
    // loginForm.classList.remove('hidden');
    // signupForm.classList.add('hidden');
    alert('button clicked sucessfully...')
  };

  showSignup.onclick = () => {
    // signupForm.classList.remove('hidden');
    // loginForm.classList.add('hidden');
    alert('button clicked sucessfully...')
  };
