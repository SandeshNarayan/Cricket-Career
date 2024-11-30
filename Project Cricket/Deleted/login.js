document.addEventListener('DOMContentLoaded', function () {
    // Function to dynamically create the login form
    function renderLoginForm() {
        const contentDiv = document.getElementById('content');

        contentDiv.innerHTML = `
            <div class="container">
                <div class="login-form">
                    <h1>Login</h1>
                    <form id="loginForm">
                        <div class="input-box">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required>
                        </div>
                        
                        <div class="input-box">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password" required>
                        </div>
                        
                        <div class="input-box button">
                            <button type="submit">Login</button>
                        </div>
                        
                        <div class="option">Don't have an account? <a href="/register">Register here</a></div>
                    </form>
                    <div id="errorMessage" style="color: red;"></div>
                </div>
            </div>
        `;

        // Add the event listener for form submission
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }

    // Function to handle the login process
    function handleLogin(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Assuming you're sending the data to a /login route on your server
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                // Redirect to dashboard after successful login
                window.location.href = '/dashboard';
            } else {
                // Show error message
                document.getElementById('errorMessage').textContent = 'Invalid email or password. Please try again.';
            }
        })
        .catch(error => {
            document.getElementById('errorMessage').textContent = 'Login failed. Please try again.';
        });
    }

    // Render the login form on page load
    renderLoginForm();
});
