import Team from './Team.js';
import ProbabilityCalculator from './ProbabilityCalculator.js';

class ProLeague {
    constructor(leagueName, numTeams = 6) {
        this.leagueName = leagueName;
        this.numTeams = numTeams;
        this.teams = [];
        this.schedule = [];
        this.standings = {};
    }

    // Generate teams for the league
    generateTeams() {
        for (let i = 0; i < this.numTeams; i++) {
            const team = new Team(`Team ${i + 1}`);
            team.generateBalancedTeam(); // Automatically generate a balanced team
            this.teams.push(team);
            this.initializeStandings(team.teamName); // Add team to standings
        }
    }

    // Initialize the standings for each team
    initializeStandings(teamName) {
        this.standings[teamName] = {
            played: 0,
            won: 0,
            lost: 0,
            points: 0,
            netRunRate: 0 // Placeholder for future expansion
        };
    }

    // Generate a round-robin schedule
    generateSchedule() {
        this.schedule = [];
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = i + 1; j < this.teams.length; j++) {
                this.schedule.push({ team1: this.teams[i].teamName, team2: this.teams[j].teamName });
            }
        }
    }

    // Simulate the entire season
    simulateSeason() {
        console.log(`Starting ${this.leagueName} Season!`);
        this.schedule.forEach(match => {
            this.simulateMatch(match.team1, match.team2);
        });
        this.displayStandings();
    }

    // Simulate a match between two teams
    simulateMatch(team1Name, team2Name) {
        console.log(`Match: ${team1Name} vs ${team2Name}`);

        const team1 = this.teams.find(team => team.teamName === team1Name);
        const team2 = this.teams.find(team => team.teamName === team2Name);

        // Simplified match simulation based on random outcomes (you can integrate the ProbabilityCalculator for more detailed match results)
        const team1WinProbability = Math.random();
        const team2WinProbability = Math.random();

        const matchResult = team1WinProbability > team2WinProbability ? team1 : team2;
        const losingTeam = matchResult === team1 ? team2 : team1;

        console.log(`${matchResult.teamName} wins the match!`);

        this.updateStandings(matchResult.teamName, losingTeam.teamName);
    }

    // Update the standings based on the match result
    updateStandings(winningTeam, losingTeam) {
        this.standings[winningTeam].played += 1;
        this.standings[winningTeam].won += 1;
        this.standings[winningTeam].points += 2; // 2 points for a win

        this.standings[losingTeam].played += 1;
        this.standings[losingTeam].lost += 1;
    }

    // Display the current league standings
    displayStandings() {
        console.log(`\n${this.leagueName} Standings:`);
        const sortedStandings = Object.entries(this.standings).sort(([,a], [,b]) => b.points - a.points);
        
        sortedStandings.forEach(([teamName, record], index) => {
            console.log(`${index + 1}. ${teamName} | Played: ${record.played}, Won: ${record.won}, Lost: ${record.lost}, Points: ${record.points}`);
        });
    }
}

export default ProLeague;
