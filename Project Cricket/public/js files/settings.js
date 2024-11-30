// Ensure the user is logged in before accessing the settings page
function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    
    if (!loggedInUser) {
        alert('You must be logged in to access settings.');
        window.location.href = 'index.html';
    } else {
        loadSettingsPage(loggedInUser);
    }
}

// Function to dynamically load and display the settings page
function loadSettingsPage(user) {
    // Create a form container
    const formContainer = document.createElement('div');
    formContainer.id = 'settings-form-container';
    document.body.appendChild(formContainer);

    // Create a heading for the settings form
    const heading = document.createElement('h1');
    heading.textContent = 'User Settings';
    formContainer.appendChild(heading);

    // Username change
    const usernameLabel = createLabel('Change Username:');
    const usernameInput = createInput('text', 'new-username');
    usernameInput.value = user.username;
    formContainer.appendChild(usernameLabel);
    formContainer.appendChild(usernameInput);

    // Password change
    const passwordLabel = createLabel('Change Password:');
    const passwordInput = createInput('password', 'new-password');
    formContainer.appendChild(passwordLabel);
    formContainer.appendChild(passwordInput);

    // Save Button
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save Changes';
    saveButton.addEventListener('click', (e) => {
        e.preventDefault();
        saveSettings(user, usernameInput.value, passwordInput.value);
    });
    formContainer.appendChild(saveButton);

    

    // Home Button
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
    formContainer.appendChild(homeButton);
}

// Helper function to create a label element
function createLabel(text) {
    const label = document.createElement('label');
    label.textContent = text;
    return label;
}

// Helper function to create an input element
function createInput(type, id) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    return input;
}

// Save settings and update localStorage
function saveSettings(user, newUsername, newPassword) {
    let users = JSON.parse(localStorage.getItem('users'));

    // Find and update the user in the stored user data
    let userIndex = users.findIndex(u => u.username === user.username);
    if (userIndex !== -1) {
        users[userIndex].username = newUsername || user.username;  // Update username if provided
        if (newPassword) {
            users[userIndex].password = newPassword;  // Update password if provided
        }
        localStorage.setItem('users', JSON.stringify(users));  // Save updated users list to localStorage
        localStorage.setItem('user', JSON.stringify(users[userIndex]));  // Update current user in localStorage
        alert('Settings updated successfully!');
    } else {
        alert('User not found.');
    }
}

// Call the function when the page loads
window.onload = checkLoginStatus;
