// Ensure the user is logged in before accessing the create-player page
function checkLoginStatus() {
    const loggedInUser = JSON.parse(localStorage.getItem('user')); // Retrieve user object
    
    if (!loggedInUser) {
        // If the user is not logged in, redirect to the login page
        alert('You must be logged in to create a player.');
        window.location.href = 'index.html';
    } else {
        loadUserProfile(loggedInUser);
    }
}

// Function to dynamically load and display the profile form
function loadUserProfile(userData) {
    // Create a form container
    const formContainer = document.createElement('div');
    formContainer.id = 'player-form-container';
    document.body.appendChild(formContainer);

    // Create a heading for the form
    const heading = document.createElement('h1');
    heading.textContent = `${userData.username}'s Profile`;
    formContainer.appendChild(heading);

    // User Name
    const nameLabel = createLabel('User Name:');
    const nameInput = createInput('text', 'user-name');
    nameInput.value = userData.username; // Populate the input with existing data
    formContainer.appendChild(nameLabel);
    formContainer.appendChild(nameInput);

    // User Age
    const ageLabel = createLabel('User Age:');
    const ageInput = createInput('number', 'user-age');
    ageInput.value = userData.age || ''; // Populate the input with existing data
    formContainer.appendChild(ageLabel);
    formContainer.appendChild(ageInput);

    // User Favourite Sport
    const favouriteSportLabel = createLabel('Favourite Sport:');
    const favouriteSportInput = createInput('text', 'user-favourite-sport');
    favouriteSportInput.value = userData.favoriteSport || ''; // Populate with existing data
    formContainer.appendChild(favouriteSportLabel);
    formContainer.appendChild(favouriteSportInput);

    // User Hobbies
    const hobbiesLabel = createLabel('Hobbies:');
    const hobbiesInput = createInput('text', 'user-hobbies');
    hobbiesInput.value = userData.hobbies || ''; // Populate with existing data
    formContainer.appendChild(hobbiesLabel);
    formContainer.appendChild(hobbiesInput);

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Save Profile';
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        saveUser(userData.username, {
            username: nameInput.value,
            age: ageInput.value,
            favoriteSport: favouriteSportInput.value,
            hobbies: hobbiesInput.value
        });
    });
    formContainer.appendChild(submitButton);
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

// Save the user profile to localStorage
function saveUser(username, updatedData) {
    // In this case, we're only storing one user in localStorage
    localStorage.setItem('user', JSON.stringify(updatedData)); // Save the updated user profile
    alert('Profile updated successfully!');

    // Redirect user to dashboard
    window.location.href = 'dashboard.html'; 
}

// Call the function when the page loads
window.onload = checkLoginStatus;
