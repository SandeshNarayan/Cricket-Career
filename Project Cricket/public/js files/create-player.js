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

// Create a dynamic form for the user to input player details
function createPlayerForm(loggedInUser) {
    // Create a form container
    const formContainer = document.createElement('div');
    formContainer.id = 'player-form-container';
    document.body.appendChild(formContainer);

    // Create a heading for the form
    const heading = document.createElement('h1');
    heading.textContent = 'Create Your Player';
    formContainer.appendChild(heading);

    // Player Name
    const nameLabel = createLabel('Player Name:');
    const nameInput = createInput('text', 'player-name');
    formContainer.appendChild(nameLabel);
    formContainer.appendChild(nameInput);

    // Player Age
    const ageLabel = createLabel('Player Age:');
    const ageInput = createInput('number', 'player-age');
    formContainer.appendChild(ageLabel);
    formContainer.appendChild(ageInput);

    // Jersey Number
    const jerseyLabel = createLabel('Jersey Number:');
    const jerseyInput = createInput('number', 'player-jersey');
    formContainer.appendChild(jerseyLabel);
    formContainer.appendChild(jerseyInput);

    // Preferred Style (Right or Left)
    const styleLabel = createLabel('Preferred Style:');
    const styleSelect = createSelect('player-style', ['Right-handed', 'Left-handed']);
    formContainer.appendChild(styleLabel);
    formContainer.appendChild(styleSelect);

    // Role Selection (Batsman, Bowler, Allrounder, Keeper)
    const roleLabel = createLabel('Select Role:');
    const roleSelect = createSelect('player-role', ['Batsman', 'Bowler', 'Allrounder', 'Keeper']);
    roleSelect.addEventListener('change', handleRoleChange);
    formContainer.appendChild(roleLabel);
    formContainer.appendChild(roleSelect);

    // Additional dynamic fields for bowler type or batting position
    const additionalFields = document.createElement('div');
    additionalFields.id = 'additional-fields';
    formContainer.appendChild(additionalFields);

    // Playing Style (Aggressive, Defensive, Normal)
    const playStyleLabel = createLabel('Playing Style:');
    const playStyleSelect = createSelect('player-play-style', ['Aggressive', 'Defensive', 'Normal']);
    formContainer.appendChild(playStyleLabel);
    formContainer.appendChild(playStyleSelect);

    // Submit Button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Save Player';
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        savePlayer(loggedInUser);
    });
    formContainer.appendChild(submitButton);
}

// Utility function to create a label
function createLabel(text) {
    const label = document.createElement('label');
    label.textContent = text;
    return label;
}

// Utility function to create an input field
function createInput(type, id) {
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.required = true;
    return input;
}

// Utility function to create a select dropdown
function createSelect(id, options) {
    const select = document.createElement('select');
    select.id = id;
    options.forEach(optionText => {
        const option = document.createElement('option');
        option.value = optionText;
        option.textContent = optionText;
        select.appendChild(option);
    });
    return select;
}

// Handle Role Change (e.g., show bowler type or batting position based on the role)
function handleRoleChange(event) {
    const role = event.target.value;
    const additionalFields = document.getElementById('additional-fields');
    additionalFields.innerHTML = ''; // Clear previous dynamic fields

    if (role === 'Bowler' || role === 'Allrounder') {
        // If the user selects Bowler, show bowler type (Fast, Spin, Medium)
        const bowlerTypeLabel = createLabel('Bowler Type:');
        const bowlerTypeSelect = createSelect('player-bowler-type', ['Fast', 'Spin', 'Medium']);
        additionalFields.appendChild(bowlerTypeLabel);
        additionalFields.appendChild(bowlerTypeSelect);
    } else if (role !== 'Bowler') {
        // If not a bowler or keeper, show batting position for batsman and allrounder
        const battingPositionLabel = createLabel('Preferred Batting Position:');
        const battingPositionSelect = createSelect('player-batting-position', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']);
        additionalFields.appendChild(battingPositionLabel);
        additionalFields.appendChild(battingPositionSelect);
    }
}

// Save player data for the logged-in user
function savePlayer(loggedInUser) {
    const playerName = document.getElementById('player-name').value;
    const playerAge = document.getElementById('player-age').value;
    const playerJersey = document.getElementById('player-jersey').value;
    const playerStyle = document.getElementById('player-style').value;
    const playerRole = document.getElementById('player-role').value;
    const playerPlayStyle = document.getElementById('player-play-style').value;

    // Optional fields depending on role
    const additionalFields = {};
    if (playerRole === 'Bowler' || playerRole === 'Allrounder') {
        const playerBowlerType = document.getElementById('player-bowler-type').value;
        additionalFields.bowlerType = playerBowlerType;
    } else if (playerRole !== 'Bowler') {
        const playerBattingPosition = document.getElementById('player-batting-position').value;
        additionalFields.battingPosition = playerBattingPosition;
    }

    // Create a player object
    const player = {
        name: playerName,
        age: playerAge,
        jerseyNumber: playerJersey,
        preferredStyle: playerStyle,
        role: playerRole,
        playingStyle: playerPlayStyle,
        ...additionalFields // Add additional fields based on the role
    };

    // Save the player data to localStorage under the logged-in user
    localStorage.setItem(`player_${loggedInUser}`, JSON.stringify(player));
    alert('Player created successfully!');

    // Optionally, redirect to another page after saving (like a player dashboard)
    window.location.href = 'user.html';
}


// Initialize the form when the page loads
window.onload = checkLoginStatus;
