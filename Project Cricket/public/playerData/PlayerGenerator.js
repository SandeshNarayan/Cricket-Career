import PlayerSkills from './PlayerSkills.js';

class PlayerGenerator {
    constructor() {
        this.roles = ['batsman', 'bowler', 'allrounder', 'keeper'];
        this.firstNames = ['John', 'David', 'Chris', 'Virat', 'Steve', 'Kane', 'Rohit', 'Joe', 'Babar', 'Ben'];
        this.lastNames = ['Smith', 'Kohli', 'Williamson', 'Root', 'Sharma', 'Stokes', 'Anderson', 'Cummins', 'Warner', 'de Villiers'];
    }

    // Generate a random player
    generatePlayer() {
        const role = this.randomRole();
        const name = this.randomName();
        const age = this.randomAge(18, 35); // Set age between 18 and 35 for realistic players
        const skills = new PlayerSkills(role); // Generate skills based on the player's role

        return {
            name: name,
            age: age,
            role: role,
            skills: skills.getSkills()
        };
    }

    // Generate a list of random players
    generateTeam(teamSize = 11) {
        const team = [];
        for (let i = 0; i < teamSize; i++) {
            team.push(this.generatePlayer());
        }
        return team;
    }

    // Helper method to generate a random role
    randomRole() {
        return this.roles[Math.floor(Math.random() * this.roles.length)];
    }

    // Helper method to generate a random name
    randomName() {
        const firstName = this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
        const lastName = this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
        return `${firstName} ${lastName}`;
    }

    // Helper method to generate a random age
    randomAge(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default PlayerGenerator;
