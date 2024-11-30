class Player {
    constructor(name, stats) {
        this.name = name;
        this.stats = stats; // Stats should include performance metrics
    }

    // Method to calculate player rating based on their stats
    calculateRating() {
        const { runsScored, wicketsTaken, matchesPlayed, average, strikeRate, economyRate } = this.stats;

        // Simple rating formula: you can adjust the weightage as needed
        let rating = 0;

        // Batting Rating
        if (runsScored > 0) {
            rating += (runsScored / matchesPlayed) * 0.5; // Average runs per match
            rating += (strikeRate / 100) * 0.2; // Strike rate contribution
            rating += (average / 50) * 0.3; // Average contribution
        }

        // Bowling Rating
        if (wicketsTaken > 0) {
            rating += (wicketsTaken / matchesPlayed) * 0.5; // Average wickets per match
            rating -= (economyRate / 10) * 0.5; // Economy rate contribution (lower is better)
        }

        return rating;
    }
}

class Rating {
    constructor(players) {
        this.players = players; // Array of Player objects
    }

    // Method to rank players based on calculated ratings
    rankPlayers() {
        // Calculate ratings for all players
        this.players.forEach(player => {
            player.rating = player.calculateRating();
        });

        // Sort players based on rating in descending order
        this.players.sort((a, b) => b.rating - a.rating);
    }

    // Method to display rankings
    displayRankings() {
        console.log('Player Rankings:');
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. ${player.name} - Rating: ${player.rating.toFixed(2)}`);
        });
    }

    // Method to rank international players only
    rankInternationalPlayers() {
        const internationalPlayers = this.players.filter(player => player.stats.isInternational);
        const internationalRating = new Rating(internationalPlayers);
        internationalRating.rankPlayers();
        return internationalRating.players;
    }

    // Method to display international rankings
    displayInternationalRankings() {
        const internationalPlayers = this.rankInternationalPlayers();
        console.log('International Player Rankings:');
        internationalPlayers.forEach((player, index) => {
            console.log(`${index + 1}. ${player.name} - Rating: ${player.rating.toFixed(2)}`);
        });
    }
}

// Example usage:
const players = [
    new Player('Player A', { runsScored: 1000, wicketsTaken: 50, matchesPlayed: 25, average: 40, strikeRate: 130, economyRate: 5.0, isInternational: true }),
    new Player('Player B', { runsScored: 800, wicketsTaken: 30, matchesPlayed: 20, average: 35, strikeRate: 120, economyRate: 6.0, isInternational: true }),
    new Player('Player C', { runsScored: 600, wicketsTaken: 20, matchesPlayed: 15, average: 30, strikeRate: 110, economyRate: 5.5, isInternational: false }),
    new Player('Player D', { runsScored: 500, wicketsTaken: 10, matchesPlayed: 10, average: 25, strikeRate: 115, economyRate: 6.5, isInternational: false }),
    // Add more players as needed
];

const ratingSystem = new Rating(players);
ratingSystem.rankPlayers();
ratingSystem.displayRankings();
ratingSystem.displayInternationalRankings();
