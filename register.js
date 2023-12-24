// register.js

function onSignIn(googleUser) {
    // Get the user's ID token
    var id_token = googleUser.getAuthResponse().id_token;
    // Send the ID token to your server-side or credential response handler script
    // For example, using fetch API
    fetch('https://yourbackend.example.com/tokensignin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'idtoken=' + id_token
    })
    .then(response => response.json())
    .then(data => {
      console.log('Signed in as: ' + data);
      // Handle successful sign-in on the client side
      // For example, redirect to the user's dashboard
      window.location.href = '/dashboard';
    })
    .catch(error => {
      console.error('Error signing in:', error);
    });
  }
  
  function registerUser() {
    // Get form data
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Send registration data to your server
    // For example, using fetch API
    fetch('https://yourbackend.example.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Registration successful:', data);
      // Handle successful registration on the client side
    })
    .catch(error => {
      console.error('Error registering user:', error);
    });
  }
  
  function loginUser() {
    // Get form data
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Send login data to your server
    // For example, using fetch API
    fetch('https://yourbackend.example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Login successful:', data);
      // Handle successful login on the client side
      // For example, redirect to the user's dashboard
      window.location.href = '/dashboard';
    })
    .catch(error => {
      console.error('Error logging in:', error);
    });
  }
  