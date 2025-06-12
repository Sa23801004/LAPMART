document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // For demonstration, let's assume the correct credentials are:
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('message').innerText = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        // Redirect to the homepage or another page after successful login
        // window.location.href = 'index.html';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password.';
    }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // For demonstration, we just show a success message
    document.getElementById('signupMessage').innerText = 'Sign up successful!';
    document.getElementById('signupMessage').style.color = 'green';

    // In a real application, you would send the credentials to the server for processing
});
