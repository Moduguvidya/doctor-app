// script.js
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Login Successful (Frontend only)");
    });
  }

  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pass = document.getElementById('password').value;
      const confirm = document.getElementById('confirmPassword').value;
      if (pass !== confirm) {
        alert("Passwords do not match!");
      } else {
        alert("Registration Successful (Frontend only)");
      }
    });
  }
});