class Player {
    constructor(role) {
        this.firstName = this.generateFirstName();
        this.lastName = this.generateLastName();
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.age = this.generateAge();
        this.id = this.generateId();
        this.role = role || this.assignRandomRole();
    }

    // List of possible first names
    static firstNames = [
        "James", "John", "Robert", "Michael", "William",
        "David", "Joseph", "Thomas", "Charles", "Daniel",
        "Matthew", "Anthony", "Donald", "Mark", "Paul",
        "Steven", "Andrew", "Kenneth", "Joshua", "Kevin",
        "Brian", "George", "Edward", "Ronald", "Timothy",
        "Jason", "Jeffrey", "Ryan", "Jacob", "Gary"
    ];

    // List of possible last names
    static lastNames = [
        "Smith", "Johnson", "Williams", "Brown", "Jones",
        "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
        "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
        "Thomas", "Taylor", "Moore", "Jackson", "Martin",
        "Lee", "Perez", "Thompson", "White", "Harris",
        "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson"
    ];

    // List of possible roles
    static roles = ["batsman", "bowler", "allrounder", "keeper"];
    // Generate random first name
    generateFirstName() {
        const randomIndex = Math.floor(Math.random() * Player.firstNames.length);
        return Player.firstNames[randomIndex];
    }

    // Generate random last name
    generateLastName() {
        const randomIndex = Math.floor(Math.random() * Player.lastNames.length);
        return Player.lastNames[randomIndex];
    }

    // Generate random age between 18 and 40
    generateAge() {
        return Math.floor(Math.random() * (40 - 18 + 1)) + 18;
    }

    // Generate unique ID
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }

    // Assign a random role to the player
    assignRandomRole() {
        const randomIndex = Math.floor(Math.random() * Player.roles.length);
        return Player.roles[randomIndex];
    }
    // Get player info as an object
    getPlayerInfo() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.fullName,
            age: this.age,
            role: this.role
        };
    }

    // Get player info as a string
    toString() {
        return `Player: ${this.fullName} (Age: ${this.age}, Role: ${this.role})`;
    }
}

// Example usage:
// const player = new Player();
// console.log(player.toString());
// console.log(player.getPlayerInfo());

export default Player;
