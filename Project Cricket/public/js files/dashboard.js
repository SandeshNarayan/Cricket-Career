// Ensure the user is logged in before accessing the create-player page
function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Retrieve user object
    
    if (!loggedInUser) {
        // If the user is not logged in, redirect to the login page
        alert('You must be logged in to create a player.');
        window.location.href = 'index.html';
    } else {
        createPlayerForm(loggedInUser);
    }
}

// User's career status stored in localStorage
let careerStarted = JSON.parse(localStorage.getItem('careerStarted')) || false;

// Function to dynamically create the dashboard and its buttons
function createDashboard() {
    // Create a container for the dashboard
    let dashboardContainer = document.createElement('div');
    dashboardContainer.id = 'dashboard'; // Add the 'dashboard' ID for styling
    document.body.appendChild(dashboardContainer);


    // Create a heading for the dashboard
    let heading = document.createElement('h1');
    heading.textContent = 'Dashboard';
    document.body.appendChild(heading);

    // Create Start Career button
    let startCareerBtn = document.createElement('button');
    startCareerBtn.id = 'start-career-btn';
    startCareerBtn.textContent = 'Start Career';
    startCareerBtn.addEventListener('click', startCareer);
    document.body.appendChild(startCareerBtn);
    document.body.appendChild(document.createElement('br'));

    // Create Continue Career button
    let continueCareerBtn = document.createElement('button');
    continueCareerBtn.id = 'continue-career-btn';
    continueCareerBtn.textContent = 'Continue Career';
    continueCareerBtn.addEventListener('click', continueCareer);
    document.body.appendChild(continueCareerBtn);
    document.body.appendChild(document.createElement('br'));

    // Create Add Profile button
    let addProfileBtn = document.createElement('button');
    addProfileBtn.id = 'add-profile-btn';
    addProfileBtn.textContent = 'Add Profile';
    addProfileBtn.addEventListener('click', addProfile);
    document.body.appendChild(addProfileBtn);
    document.body.appendChild(document.createElement('br'));

    // Create Settings button
    let settingsBtn = document.createElement('button');
    settingsBtn.id = 'settings-btn';
    settingsBtn.textContent = 'Settings';
    settingsBtn.addEventListener('click', goToSettings);
    document.body.appendChild(settingsBtn);
    document.body.appendChild(document.createElement('br'));

    // Create Logout button
    let logoutBtn = document.createElement('button');
    logoutBtn.id = 'logout-btn';
    logoutBtn.textContent = 'Logout';
    logoutBtn.addEventListener('click', logout);
    document.body.appendChild(logoutBtn);
}

// Function to handle "Start Career"
function startCareer() {
    // Confirm if the user wants to overwrite a previous career
    if (careerStarted) {
        let confirmNewCareer = confirm('You already have a career started. Starting a new one will delete the current career. Do you want to continue?');
        if (!confirmNewCareer) return;
    }

    // Start a new career (overwrite previous data if any)
    localStorage.setItem('careerStarted', true);
    alert('New career started!');
    
    // Redirect to create-player.html
    window.location.href = 'create-player.html';
}

// Function to handle "Continue Career"
function continueCareer() {
    if (careerStarted) {
        // Redirect to user.html if a career has been started
        window.location.href = 'user.html';
    } else {
        // Alert the user that no career has been started
        alert('No career started yet. Please start a new career.');
    }
}

// Function to handle "Add Profile"
function addProfile() {
    // Redirect to profile.html
    window.location.href = 'profile.html';
}

// Function to handle "Settings"
function goToSettings() {
    // Redirect to settings.html
    window.location.href = 'settings.html';
}

// Function to handle "Logout"
function logout() {
    // Clear any necessary data (if needed)
    // Redirect to the index.html (login page)
    window.location.href = '../index.html';
}

// Initialize the dashboard when the page loads
window.onload = createDashboard;
