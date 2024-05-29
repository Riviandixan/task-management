class User {

  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.users));

    return {
      success: true,
    };

  }

  signinUser(usernameByInput) {

    const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

    if (userExists) {
      return {
        success: true,
        username,
      }
    } else {
      return {
        success: false,
        message: 'data tidak di temukan',
      }
    }

  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }
}