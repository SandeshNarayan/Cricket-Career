// User database (simulated with localStorage)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Function to dynamically create the forms
function createForms() {
    // Create the registration form
    let registerForm = document.createElement('form');
    registerForm.id = 'register-form';
    registerForm.innerHTML = `
        <h2>Register</h2>
        <input type="text" id="register-username" placeholder="Username" required>
        <input type="password" id="register-password" placeholder="Password" required>
        <button type="submit">Register</button>
    `;

    // Create the login form
    let loginForm = document.createElement('form');
    loginForm.id = 'login-form';
    loginForm.innerHTML = `
        <h2>Login</h2>
        <input type="text" id="login-username" placeholder="Username" required>
        <input type="password" id="login-password" placeholder="Password" required>
        <button type="submit">Login</button>
    `;

    // Append both forms to the .auth-forms container
    let authFormsContainer = document.querySelector('.auth-forms');
    authFormsContainer.appendChild(registerForm);
    authFormsContainer.appendChild(loginForm);

    // Attach event listeners to handle registration and login after forms are added
    registerForm.addEventListener('submit', registerUser);
    loginForm.addEventListener('submit', loginUser);
}

// Function to handle registration
function registerUser(event) {
    event.preventDefault();

    let username = document.getElementById('register-username').value;
    let password = document.getElementById('register-password').value;

    // Check if user already exists
    let existingUser = users.find(user => user.username === username);

    if (existingUser) {
        alert('Username already exists, please choose a different one.');
    } else {
        // Save new user
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        document.getElementById('register-form').reset();
    }
}

// Function to handle login
function loginUser(event) {
    event.preventDefault();

    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    // Check if user exists and password matches
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful! Welcome, ' + username);
        document.getElementById('login-form').reset();

        // Store the logged-in user's data in localStorage
        localStorage.setItem('user', JSON.stringify(user)); // Storing user object

        // Redirect user to dashboard
        window.location.href = 'User/dashboard.html';
    } else {
        alert('Incorrect username or password.');
    }
}

// Call the function to create forms when the page loads
window.onload = createForms;