// Select necessary elements
const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');
const passwordInput = document.getElementById('password');
const togglePassword = document.querySelector('.toggle-password');

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

// Handle login form submission
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = passwordInput.value;

  // Send login data to server
  fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      message.textContent = '';
      localStorage.setItem('authToken', data.token); // Store token
      window.location.href = 'secured.html'; // Redirect to secured page
    } else {
      message.textContent = data.message || 'Incorrect username or password.';
    }
  })
  .catch(() => {
    message.textContent = 'An error occurred. Please try again later.';
  });
});

// Check for existing token
const token = localStorage.getItem('authToken');
if (token) {
  // Validate token with server
  fetch('/api/validate-token', {
    headers: { 'Authorization': `Bearer ${token}` }
  })
  .then(res => res.json())
  .then(data => {
    if (!data.valid) localstorage.removeItem('authToken'); // Remove invalid token
  })
  .catch(() => console.error('Error validating token.'));
}







  
