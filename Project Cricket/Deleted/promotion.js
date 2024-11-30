// promotion.js

class Promotion {
    constructor(leagues) {
        this.leagues = leagues; // Array of leagues to manage promotions
    }

    // Promote teams based on performance
    promoteTeams() {
        this.leagues.forEach((league, index) => {
            if (index < this.leagues.length - 1) { // No promotion for the last league
                const teamsToPromote = this.getTeamsToPromote(league);
                const nextLeague = this.leagues[index + 1];
                teamsToPromote.forEach(team => {
                    console.log(`${team} is promoted from ${league.name} to ${nextLeague.name}.`);
                    nextLeague.teams.push(team);
                    league.teams = league.teams.filter(t => t !== team); // Remove from current league
                });
            }
        });
    }

    // Get top teams to promote based on ranking
    getTeamsToPromote(league) {
        const sortedTeams = Object.keys(league.rankings).sort((a, b) => {
            return league.rankings[b].points - league.rankings[a].points; // Sort by points
        });

        // Define how many teams to promote (for example, top 2 teams)
        const teamsToPromote = sortedTeams.slice(0, 2); // Adjust based on league requirements
        return teamsToPromote;
    }

    // Relegate teams based on performance
    relegateTeams() {
        this.leagues.forEach((league, index) => {
            if (index > 0) { // No relegation for the top league
                const teamsToRelegate = this.getTeamsToRelegate(league);
                const previousLeague = this.leagues[index - 1];
                teamsToRelegate.forEach(team => {
                    console.log(`${team} is relegated from ${league.name} to ${previousLeague.name}.`);
                    previousLeague.teams.push(team);
                    league.teams = league.teams.filter(t => t !== team); // Remove from current league
                });
            }
        });
    }

    // Get bottom teams to relegate based on ranking
    getTeamsToRelegate(league) {
        const sortedTeams = Object.keys(league.rankings).sort((a, b) => {
            return league.rankings[a].points - league.rankings[b].points; // Sort by points
        });

        // Define how many teams to relegate (for example, bottom 2 teams)
        const teamsToRelegate = sortedTeams.slice(0, 2); // Adjust based on league requirements
        return teamsToRelegate;
    }
}

// Example usage
const league1 = {
    name: "League 1",
    teams: ["Team A", "Team B", "Team C", "Team D"],
    rankings: {
        "Team A": { points: 12 },
        "Team B": { points: 9 },
        "Team C": { points: 5 },
        "Team D": { points: 2 },
    }
};

const league2 = {
    name: "League 2",
    teams: ["Team E", "Team F", "Team G", "Team H"],
    rankings: {
        "Team E": { points: 10 },
        "Team F": { points: 7 },
        "Team G": { points: 3 },
        "Team H": { points: 1 },
    }
};

// Add more leagues as needed...
const leagues = [league2, league1]; // League 1 is at the top, League 2 is below

const promotionManager = new Promotion(leagues);
promotionManager.promoteTeams(); // Promote teams based on rankings
promotionManager.relegateTeams(); // Relegate teams based on rankings
