document.addEventListener('DOMContentLoaded', () => {

  const userForm = document.getElementById('userForm');
  const userManager = new User();

  userForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const usernameByInput = document.getElementById('username').value;

    const result = userManager.signinUser(usernameByInput);

    if (result.success) {
      localStorage.setItem('usernameLoggeIn', usernameByInput);
      return window.location.href = '../tasks.html';
    } else {
      alert('data tidak ditemukan!');
    }

  });

});