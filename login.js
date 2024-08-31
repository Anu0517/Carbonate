const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your actual authentication logic using fetch API or AJAX
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Successful login, redirect or perform other actions
            alert('Login successful!');
        } else {
            // Invalid credentials, display an error message
            alert('Invalid username or password.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});