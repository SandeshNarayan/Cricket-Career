// stats.js

class PlayerStats {
    constructor(playerName) {
        this.playerName = playerName;
        this.matchesPlayed = 0;
        this.runsScored = 0;
        this.wicketsTaken = 0;
        this.centuries = 0;
        this.halfCenturies = 0;
        this.average = 0; // Calculated as runsScored / matchesPlayed
        this.stamina = 100; // Example stamina representation
    }

    // Method to update stats after a match
    updateStats(runs, wickets) {
        this.matchesPlayed += 1;
        this.runsScored += runs;
        this.wicketsTaken += wickets;

        // Check for centuries and half-centuries
        if (runs >= 100) {
            this.centuries += 1;
        } else if (runs >= 50) {
            this.halfCenturies += 1;
        }

        // Update batting average
        this.average = this.matchesPlayed > 0 ? (this.runsScored / this.matchesPlayed).toFixed(2) : 0;

        // Example stamina update based on performance
        this.updateStamina();
    }

    // Method to update stamina based on performance
    updateStamina() {
        // Decrease stamina if player plays a match
        this.stamina -= 10; // Example decrement; adjust based on your game's rules

        // Ensure stamina does not drop below 0
        if (this.stamina < 0) {
            this.stamina = 0;
        }
    }

    // Method to reset stamina for a new season or tournament
    resetStamina() {
        this.stamina = 100; // Reset stamina
    }

    // Method to display player stats
    displayStats() {
        console.log(`Player: ${this.playerName}`);
        console.log(`Matches Played: ${this.matchesPlayed}`);
        console.log(`Runs Scored: ${this.runsScored}`);
        console.log(`Wickets Taken: ${this.wicketsTaken}`);
        console.log(`Centuries: ${this.centuries}`);
        console.log(`Half-Centuries: ${this.halfCenturies}`);
        console.log(`Batting Average: ${this.average}`);
        console.log(`Stamina: ${this.stamina}`);
        console.log('-----------------------------------');
    }
}

// Example usage
const player1 = new PlayerStats('Batsman 1');

// Simulating some matches
player1.updateStats(120, 0); // 120 runs, 0 wickets
player1.updateStats(45, 1); // 45 runs, 1 wicket
player1.updateStats(90, 0); // 90 runs, 0 wickets

// Display the stats of the player
player1.displayStats();

// You can create multiple players and track their stats independently.
const player2 = new PlayerStats('Bowler 1');
player2.updateStats(0, 2); // 0 runs, 2 wickets
player2.updateStats(0, 1); // 0 runs, 1 wicket
player2.displayStats();
