import PlayerGenerator from './PlayerGenerator.js';

class Team {
    constructor(teamName) {
        this.teamName = teamName;
        this.players = []; // Collection of players
        this.roleDistribution = {
            batsman: 5,
            bowler: 4,
            allrounder: 1,
            keeper: 1
        };
    }

    // Method to generate a balanced team
    generateBalancedTeam() {
        const playerGenerator = new PlayerGenerator();
        this.players = []; // Reset players list

        // Generate and assign players based on role distribution
        this.addPlayersByRole('batsman', this.roleDistribution.batsman, playerGenerator);
        this.addPlayersByRole('bowler', this.roleDistribution.bowler, playerGenerator);
        this.addPlayersByRole('allrounder', this.roleDistribution.allrounder, playerGenerator);
        this.addPlayersByRole('keeper', this.roleDistribution.keeper, playerGenerator);

        // Validate team composition
        this.validateTeam();
    }

    // Method to add players by role
    addPlayersByRole(role, count, playerGenerator) {
        let playersAdded = 0;
        while (playersAdded < count) {
            const player = playerGenerator.generatePlayer();
            if (player.role === role) {
                this.players.push(player);
                playersAdded++;
            }
        }
    }

    // Validate the team composition
    validateTeam() {
        const roleCount = this.getRoleCount();
        for (const [role, count] of Object.entries(this.roleDistribution)) {
            if (roleCount[role] !== count) {
                console.error(`Team does not have the correct number of ${role}s. Expected: ${count}, Found: ${roleCount[role]}`);
            }
        }
    }

    // Get the current count of players by role
    getRoleCount() {
        const roleCount = { batsman: 0, bowler: 0, allrounder: 0, keeper: 0 };
        this.players.forEach(player => {
            roleCount[player.role]++;
        });
        return roleCount;
    }

    // Method to assign players manually to the team
    assignPlayer(player) {
        const roleCount = this.getRoleCount();

        // Check if adding this player violates the role distribution
        if (roleCount[player.role] >= this.roleDistribution[player.role]) {
            console.log(`Cannot add more ${player.role}s to the team.`);
            return false;
        }

        // Add player to the team
        this.players.push(player);
        return true;
    }

    // Display team composition
    displayTeam() {
        console.log(`Team: ${this.teamName}`);
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. ${player.name} (Role: ${player.role}, Age: ${player.age})`);
            console.log(`   Skills:`, player.skills);
        });
    }
}

export default Team;
