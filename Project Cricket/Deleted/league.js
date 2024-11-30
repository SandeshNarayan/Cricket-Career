// league.js

class League {
    constructor(name, teams, formats) {
        this.name = name; // Name of the league
        this.teams = teams; // Array of teams participating in the league
        this.formats = formats; // Different formats played in the league (e.g., T20, ODI, Test)
        this.schedule = []; // Array to hold the schedule of matches
        this.rankings = {}; // Object to hold team rankings and points
        this.pointsPerWin = 3; // Points awarded for a win
        this.pointsPerLoss = 0; // Points awarded for a loss
        this.pointsPerTie = 1; // Points awarded for a tie
        this.pointsPerNoResult = 1; // Points awarded for no result
        this.initRankings(); // Initialize rankings
    }

    // Initialize rankings for teams
    initRankings() {
        this.teams.forEach(team => {
            this.rankings[team] = {
                points: 0,
                matchesPlayed: 0,
                wins: 0,
                losses: 0,
                ties: 0
            };
        });
    }

    // Generate a schedule for the league matches
    generateSchedule() {
        for (let format of this.formats) {
            console.log(`Generating schedule for ${this.name} (${format} format):`);
            const numTeams = this.teams.length;
            for (let i = 0; i < numTeams; i++) {
                for (let j = i + 1; j < numTeams; j++) {
                    const match = {
                        home: this.teams[i],
                        away: this.teams[j],
                        format: format,
                        date: this.getMatchDate() // You can customize this to set specific dates
                    };
                    this.schedule.push(match);
                    console.log(`Match Scheduled: ${match.home} vs ${match.away} on ${match.date} (${format})`);
                }
            }
        }
    }

    // Simulate a match result and update rankings
    updateRankings(winner, loser) {
        if (this.rankings[winner] && this.rankings[loser]) {
            this.rankings[winner].points += this.pointsPerWin;
            this.rankings[loser].points += this.pointsPerLoss;
            this.rankings[winner].wins += 1;
            this.rankings[loser].losses += 1;

            this.rankings[winner].matchesPlayed += 1;
            this.rankings[loser].matchesPlayed += 1;

            console.log(`Match Result: ${winner} wins against ${loser}.`);
        } else {
            console.error("Invalid team names provided for ranking update.");
        }
    }

    // Display current league rankings
    displayRankings() {
        console.log(`Current Rankings for ${this.name}:`);
        const sortedTeams = Object.keys(this.rankings).sort((a, b) => {
            return this.rankings[b].points - this.rankings[a].points; // Sort by points
        });

        sortedTeams.forEach((team, index) => {
            const { points, matchesPlayed, wins, losses } = this.rankings[team];
            console.log(`${index + 1}. ${team} - Points: ${points}, Matches Played: ${matchesPlayed}, Wins: ${wins}, Losses: ${losses}`);
        });
    }

    // Helper method to get a random date for match scheduling
    getMatchDate() {
        const startDate = new Date();
        const endDate = new Date();
        endDate.setMonth(endDate.getMonth() + 6); // Schedule matches within the next 6 months
        return new Date(startDate.getTime() + Math.random() * (endDate - startDate)).toLocaleDateString();
    }
}

// Example usage
const leagueName = "Premier League";
const teams = ["Team A", "Team B", "Team C", "Team D", "Team E"];
const formats = ["T20", "ODI", "Test"];

const premierLeague = new League(leagueName, teams, formats);
premierLeague.generateSchedule(); // Generate schedule for matches
premierLeague.updateRankings("Team A", "Team B"); // Example match result
premierLeague.updateRankings("Team C", "Team D"); // Example match result
premierLeague.displayRankings(); // Display current rankings
