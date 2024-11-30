import Team from './team.js';

class ProLeague {
    constructor(numberOfTeams = 10) {
        this.leagueName = this.generateLeagueName();
        this.season = new Date().getFullYear();
        this.teams = [];
        this.generateTeams(numberOfTeams);
        this.leagueTable = this.initializeLeagueTable();
    }

    // Team name components
    static cities = [
        "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata",
        "Hyderabad", "Punjab", "Rajasthan", "Gujarat", "Lucknow",
        "Pune", "Ahmedabad", "Kochi", "Indore", "Jaipur"
    ];

    static teamNames = [
        "Kings", "Warriors", "Riders", "Giants", "Knights",
        "Royals", "Titans", "Strikers", "Hurricanes", "Dragons",
        "Panthers", "Lions", "Tigers", "Eagles", "Falcons"
    ];

    static sponsorNames = [
        "Super", "Royal", "Metro", "Elite", "Prime",
        "Ultra", "Master", "Supreme", "Imperial", "Grand"
    ];

    static leagueNames = [
        "Premier League", "Super League", "Elite Series",
        "Championship", "Major League", "Pro Series"
    ];

    static colors = [
        "Blue", "Red", "Green", "Purple", "Gold",
        "Orange", "Black", "Silver", "Yellow", "Maroon"
    ];

    generateLeagueName() {
        const sponsor = this.getRandomElement(ProLeague.sponsorNames);
        const leagueName = this.getRandomElement(ProLeague.leagueNames);
        return `${sponsor} Cricket ${leagueName}`;
    }

    generateTeamName() {
        const usedNames = new Set(this.teams.map(team => team.teamName));
        let teamName;
        
        do {
            const city = this.getRandomElement(ProLeague.cities);
            const name = this.getRandomElement(ProLeague.teamNames);
            const color = this.getRandomElement(ProLeague.colors);
            teamName = `${city} ${color} ${name}`;
        } while (usedNames.has(teamName));

        return teamName;
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generateTeams(count) {
        for (let i = 0; i < count; i++) {
            const teamName = this.generateTeamName();
            const team = new Team(teamName);
            this.teams.push(team);
        }
    }

    initializeLeagueTable() {
        return this.teams.map(team => ({
            teamName: team.teamName,
            played: 0,
            won: 0,
            lost: 0,
            tied: 0,
            noResult: 0,
            points: 0,
            netRunRate: 0,
            form: [],
            stats: {
                totalRuns: 0,
                totalWickets: 0,
                totalSixes: 0,
                totalFours: 0,
                highestTeamScore: 0,
                lowestTeamScore: 999,
            }
        }));
    }

    getTeamDetails(teamName) {
        const team = this.teams.find(t => t.teamName === teamName);
        if (!team) return null;

        const tablePosition = this.leagueTable.find(t => t.teamName === teamName);
        return {
            teamInfo: team.getTeamInfo(),
            leaguePosition: tablePosition
        };
    }

    generateSchedule() {
        const schedule = [];
        const teams = [...this.teams];

        // Each team plays against every other team twice (home and away)
        for (let round = 0; round < 2; round++) {
            for (let i = 0; i < teams.length; i++) {
                for (let j = i + 1; j < teams.length; j++) {
                    const homeTeam = round === 0 ? teams[i] : teams[j];
                    const awayTeam = round === 0 ? teams[j] : teams[i];
                    const match = {
                        round: round + 1,
                        homeTeam: homeTeam.teamName,
                        awayTeam: awayTeam.teamName,
                        date: null, // To be filled later
                        venue: `${homeTeam.teamName.split(' ')[0]} Stadium`,
                        played: false
                    };
                    schedule.push(match);
                }
            }
        }

        // Assign dates to matches (one match per day)
        const startDate = new Date(this.season, 2, 1); // March 1st
        schedule.forEach((match, index) => {
            const matchDate = new Date(startDate);
            matchDate.setDate(startDate.getDate() + index);
            match.date = matchDate;
        });

        return schedule;
    }

    generateLeagueStats() {
        return {
            totalMatches: this.leagueTable.reduce((sum, team) => sum + team.played, 0) / 2,
            averageRunsPerMatch: this.leagueTable.reduce((sum, team) => sum + team.stats.totalRuns, 0) / 
                               (this.leagueTable.reduce((sum, team) => sum + team.played, 0) / 2),
            mostWins: Math.max(...this.leagueTable.map(team => team.won)),
            leadingTeam: this.leagueTable.sort((a, b) => b.points - a.points)[0].teamName,
            mostSixes: Math.max(...this.leagueTable.map(team => team.stats.totalSixes)),
            mostFours: Math.max(...this.leagueTable.map(team => team.stats.totalFours)),
            highestTeamScore: Math.max(...this.leagueTable.map(team => team.stats.highestTeamScore)),
            lowestTeamScore: Math.min(...this.leagueTable.map(team => team.stats.lowestTeamScore))
        };
    }

    toString() {
        return `
${this.leagueName} ${this.season}
Teams: ${this.teams.length}
===================
${this.teams.map(team => team.teamName).join('\n')}
===================
        `;
    }

    getLeagueTable() {
        return this.leagueTable.sort((a, b) => {
            // Sort by points first
            if (b.points !== a.points) return b.points - a.points;
            // Then by net run rate
            return b.netRunRate - a.netRunRate;
        });
    }
}

// Example usage:
// const league = new ProLeague(10);
// console.log(league.toString());
// const schedule = league.generateSchedule();
// console.log(league.getLeagueTable());

export default ProLeague;