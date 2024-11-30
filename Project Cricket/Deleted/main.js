

// generates one player player.js
class Player {
    constructor() {
        this.firstName = this.generateFirstName();
        this.lastName = this.generateLastName();
        this.fullName = `${this.firstName} ${this.lastName}`;
        this.age = this.generateAge();
        this.id = this.generateId();
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

    // Get player info as an object
    getPlayerInfo() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.fullName,
            age: this.age
        };
    }

    // Get player info as a string
    toString() {
        return `Player: ${this.fullName} (Age: ${this.age})`;
    }
}

// Example usage:
// const player = new Player();
// console.log(player.toString());
// console.log(player.getPlayerInfo());




// generates random values to skills of one player skill.js
class PlayerSkills {
    constructor(playerRole) {
        this.playerRole = playerRole;
        this.initializeSkills();
        this.generateSkillsByRole();
    }

    initializeSkills() {
        this.batting = {
            powerHitting: { value: 0, min: 20 },
            precision: { value: 0, min: 20 },
            timing: { value: 0, min: 20 },
            runningBetweenWickets: { value: 0, min: 30 },
            technique: { value: 0, min: 20 },
            footwork: { value: 0, min: 20 },
            shotSelection: { value: 0, min: 20 }
        };

        this.bowling = {
            swing: { value: 0, min: 20 },
            spin: { value: 0, min: 20 },
            control: { value: 0, min: 30 },
            pace: { value: 0, min: 60 },
            variation: { value: 0, min: 20 },
            consistency: { value: 0, min: 30 },
            yorkerAccuracy: { value: 0, min: 20 }
        };

        this.fielding = {
            catching: { value: 0, min: 40 },
            throwingAccuracy: { value: 0, min: 40 },
            groundFielding: { value: 0, min: 40 },
            agility: { value: 0, min: 30 },
            reflexes: { value: 0, min: 30 }
        };

        this.physical = {
            speed: { value: 0, min: 30 },
            strength: { value: 0, min: 30 },
            endurance: { value: 0, min: 40 },
            flexibility: { value: 0, min: 30 },
            recovery: { value: 0, min: 40 }
        };

        this.mental = {
            concentration: { value: 0, min: 40 },
            pressure: { value: 0, min: 40 },
            aggression: { value: 0, min: 20 },
            adaptability: { value: 0, min: 30 },
            leadership: { value: 0, min: 20 },
            temperament: { value: 0, min: 30 }
        };

        this.experience = {
            matchesPlayed: { value: 0, min: 0 },
            performanceConsistency: { value: 0, min: 20 },
            tournamentExperience: { value: 0, min: 0 },
            situationalAwareness: { value: 0, min: 30 }
        };

        this.specializations = {
            powerplay: { value: 0, min: 0 },
            deathOvers: { value: 0, min: 0 },
            middleOvers: { value: 0, min: 0 },
            finisher: { value: 0, min: 0 }
        };
    }

    generateSkillsByRole() {
        switch (this.playerRole) {
            case 'batsman':
                this.generateBatsmanSkills();
                break;
            case 'bowler':
                this.generateBowlerSkills();
                break;
            case 'allrounder':
                this.generateAllrounderSkills();
                break;
            case 'keeper':
                this.generateKeeperSkills();
                break;
            default:
                this.generateBalancedSkills();
        }
    }

    generateRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateBatsmanSkills() {
        // High batting skills
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                Math.max(60, this.batting[skill].min),
                95
            );
        });

        // Moderate fielding skills
        Object.keys(this.fielding).forEach(skill => {
            this.fielding[skill].value = this.generateRandomValue(
                this.fielding[skill].min,
                80
            );
        });

        // Specializations based on random batting position
        this.generateBattingSpecializations();
    }

    generateBowlerSkills() {
        // High bowling skills
        Object.keys(this.bowling).forEach(skill => {
            this.bowling[skill].value = this.generateRandomValue(
                Math.max(60, this.bowling[skill].min),
                95
            );
        });

        // Generate bowling style and corresponding attributes
        this.generateBowlingStyle();
    }

    generateAllrounderSkills() {
        // Good balance of batting and bowling
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                Math.max(50, this.batting[skill].min),
                85
            );
        });

        Object.keys(this.bowling).forEach(skill => {
            this.bowling[skill].value = this.generateRandomValue(
                Math.max(50, this.bowling[skill].min),
                85
            );
        });

        // Generate both batting and bowling specializations
        this.generateBattingSpecializations();
        this.generateBowlingStyle();
    }

    generateKeeperSkills() {
        // High keeping-related skills
        this.fielding.catching.value = this.generateRandomValue(70, 95);
        this.fielding.reflexes.value = this.generateRandomValue(70, 95);

        // Good batting skills
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                Math.max(50, this.batting[skill].min),
                85
            );
        });
    }

    generateBowlingStyle() {
        const bowlingStyles = ['pace', 'spin'];
        const style = bowlingStyles[Math.floor(Math.random() * bowlingStyles.length)];

        if (style === 'pace') {
            this.bowling.pace.value = this.generateRandomValue(130, 150); // km/h
            this.bowling.swing.value = this.generateRandomValue(60, 90);
            this.specializations.deathOvers.value = this.generateRandomValue(60, 90);
        } else {
            this.bowling.spin.value = this.generateRandomValue(70, 95);
            this.bowling.variation.value = this.generateRandomValue(70, 95);
            this.specializations.middleOvers.value = this.generateRandomValue(70, 90);
        }
    }

    generateBattingSpecializations() {
        const positions = ['opener', 'top-order', 'middle-order', 'finisher'];
        const position = positions[Math.floor(Math.random() * positions.length)];

        switch (position) {
            case 'opener':
                this.specializations.powerplay.value = this.generateRandomValue(70, 95);
                this.batting.technique.value = Math.max(this.batting.technique.value, this.generateRandomValue(70, 90));
                break;
            case 'finisher':
                this.specializations.finisher.value = this.generateRandomValue(70, 95);
                this.batting.powerHitting.value = Math.max(this.batting.powerHitting.value, this.generateRandomValue(70, 95));
                break;
        }
    }

    generateBalancedSkills() {
        Object.keys(this.batting).forEach(skill => {
            this.batting[skill].value = this.generateRandomValue(
                this.batting[skill].min,
                70
            );
        });

        Object.keys(this.bowling).forEach(skill => {
            this.bowling[skill].value = this.generateRandomValue(
                this.bowling[skill].min,
                70
            );
        });
    }

    getSkillsSummary() {
        return {
            role: this.playerRole,
            battingAverage: this.calculateAverageSkills(this.batting),
            bowlingAverage: this.calculateAverageSkills(this.bowling),
            fieldingAverage: this.calculateAverageSkills(this.fielding),
            physicalAverage: this.calculateAverageSkills(this.physical),
            mentalAverage: this.calculateAverageSkills(this.mental),
            specializationStrengths: this.getTopSpecializations()
        };
    }

    calculateAverageSkills(category) {
        const values = Object.values(category).map(skill => skill.value);
        return (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
    }

    getTopSpecializations() {
        return Object.entries(this.specializations)
            .filter(([_, { value }]) => value > 70)
            .map(([name, { value }]) => ({ name, value }))
            .sort((a, b) => b.value - a.value);
    }
}

// Example usage:
// const batsmanSkills = new PlayerSkills('batsman');
// console.log(batsmanSkills.getSkillsSummary());

// generates pro-league teams at start of career pro-league.js
// import Team from './team.js';

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

// assigns players to each team team.js
// import Player from './player.js';

class Team {
    constructor(teamName, totalPlayers = 11) {
        this.teamName = teamName;
        this.players = [];
        this.generateTeam(totalPlayers);
        this.balanceTeam();
    }

    // Player role distributions
    static roleDistribution = {
        batsman: { min: 4, max: 6 },
        bowler: { min: 3, max: 4 },
        allrounder: { min: 2, max: 3 },
        keeper: { min: 1, max: 1 }
    };

    // Batting positions
    static battingPositions = [
        'opener',
        'top-order',
        'middle-order',
        'lower-order'
    ];

    // Bowling types
    static bowlingTypes = [
        'fast',
        'medium-fast',
        'spin-offbreak',
        'spin-legbreak',
        'spin-leftarm',
        'medium-pace'
    ];

    // Specialties
    static specialties = [
        'powerplay-specialist',
        'death-specialist',
        'middle-overs-specialist',
        'yorker-specialist',
        'bouncer-specialist',
        'finisher',
        'anchor'
    ];

    generateTeam(totalPlayers) {
        // First, add a keeper
        this.addPlayer('keeper');

        // Then add core players based on role distribution
        this.addPlayer('batsman', 3); // At least 3 specialist batsmen
        this.addPlayer('bowler', 3);  // At least 3 specialist bowlers
        this.addPlayer('allrounder', 2); // At least 2 all-rounders

        // Fill remaining slots while maintaining balance
        while (this.players.length < totalPlayers) {
            const neededRole = this.determineNeededRole();
            this.addPlayer(neededRole);
        }
    }

    addPlayer(role, count = 1) {
        for (let i = 0; i < count; i++) {
            const player = new Player();
            const playerRole = this.generatePlayerAttributes(role, player);
            this.players.push(playerRole);
        }
    }

    generatePlayerAttributes(role, player) {
        const attributes = {
            ...player.getPlayerInfo(),
            role: role,
            battingPosition: this.assignBattingPosition(role),
            aggression: this.generateAggression(),
            stamina: this.generateStamina(),
            experience: this.generateExperience(),
            form: this.generateForm(),
            specialty: this.assignSpecialty(role)
        };

        if (role === 'bowler' || role === 'allrounder') {
            attributes.bowlingType = this.assignBowlingType();
            attributes.bowlingStats = this.generateBowlingStats();
        }

        if (role === 'batsman' || role === 'allrounder' || role === 'keeper') {
            attributes.battingStats = this.generateBattingStats();
        }

        return attributes;
    }

    assignBattingPosition(role) {
        switch (role) {
            case 'batsman':
            case 'allrounder':
                return Team.battingPositions[Math.floor(Math.random() * Team.battingPositions.length)];
            case 'keeper':
                // Keepers usually bat in top or middle order
                return Team.battingPositions[Math.floor(Math.random() * 3)];
            case 'bowler':
                // Bowlers usually bat lower order
                return 'lower-order';
            default:
                return 'middle-order';
        }
    }

    assignBowlingType() {
        return Team.bowlingTypes[Math.floor(Math.random() * Team.bowlingTypes.length)];
    }

    assignSpecialty(role) {
        return Team.specialties[Math.floor(Math.random() * Team.specialties.length)];
    }

    generateAggression() {
        return Math.floor(Math.random() * 100) + 1;
    }

    generateStamina() {
        return Math.floor(Math.random() * 100) + 1;
    }

    generateExperience() {
        return Math.floor(Math.random() * 15) + 1; // Years of experience
    }

    generateForm() {
        return Math.floor(Math.random() * 100) + 1;
    }

    generateBattingStats() {
        return {
            matches: Math.floor(Math.random() * 200) + 1,
            runs: Math.floor(Math.random() * 5000) + 100,
            average: (Math.random() * 45 + 15).toFixed(2),
            strikeRate: (Math.random() * 100 + 50).toFixed(2),
            centuries: Math.floor(Math.random() * 15),
            fifties: Math.floor(Math.random() * 30)
        };
    }

    generateBowlingStats() {
        return {
            wickets: Math.floor(Math.random() * 200) + 1,
            economy: (Math.random() * 4 + 3).toFixed(2),
            average: (Math.random() * 25 + 20).toFixed(2),
            fiveWickets: Math.floor(Math.random() * 10)
        };
    }

    determineNeededRole() {
        const currentCounts = {
            batsman: this.players.filter(p => p.role === 'batsman').length,
            bowler: this.players.filter(p => p.role === 'bowler').length,
            allrounder: this.players.filter(p => p.role === 'allrounder').length,
            keeper: this.players.filter(p => p.role === 'keeper').length
        };

        // Check which roles are under their minimum requirements
        for (const [role, distribution] of Object.entries(Team.roleDistribution)) {
            if (currentCounts[role] < distribution.min) {
                return role;
            }
        }

        // If all minimums are met, return role that's furthest from its maximum
        return Object.entries(Team.roleDistribution)
            .map(([role, distribution]) => ({
                role,
                remainingSpots: distribution.max - currentCounts[role]
            }))
            .filter(({remainingSpots}) => remainingSpots > 0)
            .sort((a, b) => b.remainingSpots - a.remainingSpots)[0]?.role || 'batsman';
    }

    balanceTeam() {
        // Ensure we have enough openers
        const openers = this.players.filter(p => p.battingPosition === 'opener');
        if (openers.length < 2) {
            const potentialOpeners = this.players.filter(p => 
                (p.role === 'batsman' || p.role === 'allrounder') && 
                p.battingPosition !== 'opener'
            );
            for (let i = 0; i < 2 - openers.length && i < potentialOpeners.length; i++) {
                potentialOpeners[i].battingPosition = 'opener';
            }
        }

        // Ensure we have death overs specialists
        const deathSpecialists = this.players.filter(p => p.specialty === 'death-specialist');
        if (deathSpecialists.length < 2) {
            const potentialDeathBowlers = this.players.filter(p => 
                (p.role === 'bowler' || p.role === 'allrounder') && 
                p.specialty !== 'death-specialist'
            );
            for (let i = 0; i < 2 - deathSpecialists.length && i < potentialDeathBowlers.length; i++) {
                potentialDeathBowlers[i].specialty = 'death-specialist';
            }
        }
    }

    getTeamInfo() {
        return {
            teamName: this.teamName,
            players: this.players,
            composition: {
                batsmen: this.players.filter(p => p.role === 'batsman').length,
                bowlers: this.players.filter(p => p.role === 'bowler').length,
                allrounders: this.players.filter(p => p.role === 'allrounder').length,
                keepers: this.players.filter(p => p.role === 'keeper').length
            }
        };
    }

    toString() {
        return `
Team: ${this.teamName}
Players: ${this.players.length}
Composition:
- Batsmen: ${this.players.filter(p => p.role === 'batsman').length}
- Bowlers: ${this.players.filter(p => p.role === 'bowler').length}
- All-rounders: ${this.players.filter(p => p.role === 'allrounder').length}
- Keepers: ${this.players.filter(p => p.role === 'keeper').length}
        `;
    }
}

// Example usage:
// const team = new Team("Royal Challengers");
// console.log(team.toString());
// console.log(team.getTeamInfo());

// week.js simulates all matches of week except the one player plays
// import { startMatch } from './match.js';
// import { getScheduledMatches } from './league.js'; // Assuming this function returns matches for the week
// import { player } from './player.js'; // Assuming player data is imported

// Function to simulate matches for the week
export function simulateWeek(playerTeam) {
    // Get all matches scheduled for the week
    const matches = getScheduledMatches(); // This function should return an array of match objects

    console.log(`Simulating matches for the week...`);
    
    // Iterate through each match
    matches.forEach(match => {
        // Check if the match involves the player's team
        if (match.team1 !== playerTeam && match.team2 !== playerTeam) {
            // Simulate the match if the player's team is not involved
            startMatch(match.team1, match.team2, match.totalOvers);
        } else {
            console.log(`Skipping match: ${match.team1.name} vs ${match.team2.name} - Player is participating.`);
        }
    });
}


//test.js 
import { players, updatePlayerStats } from './players.js'; // Assuming this file exports players and a function to update player stats
import { createScoreboardRow, updateScoreboard } from './scoreboard.js'; // Assuming this file manages scoreboard UI
import { logEvent } from './log.js'; // Assuming this file handles logging events
import { initializePlayers } from './playerUtils.js'; // A utility to initialize players

let currentInnings = 1;
let oversLeft = 90; // Total overs in a Test match
let runs = 0;
let wickets = 0;

// Initialize scoreboard
const scoreboardBody = document.getElementById('scoreboard-body');
const logList = document.getElementById('log-list');

// Function to log match events
function logEvent(message) {
    const listItem = document.createElement('li');
    listItem.textContent = message;
    logList.appendChild(listItem);
}

// Function to simulate a ball being bowled
function bowlBall() {
    // Simulate run scored, wicket, and extras (could be randomized)
    const outcome = Math.random();
    let runsScored = 0;
    let isWicket = false;

    // Example probabilities (customize as needed)
    if (outcome < 0.05) {
        isWicket = true; // 5% chance of wicket
        wickets++;
        logEvent(`Wicket! Batsman out. Total Wickets: ${wickets}`);
    } else if (outcome < 0.45) {
        runsScored = Math.floor(Math.random() * 4) + 1; // 1-4 runs
        logEvent(`Runs scored: ${runsScored}`);
    } else {
        runsScored = 0; // Dot ball
        logEvent(`Dot ball!`);
    }

    // Update runs and player stats
    runs += runsScored;
    // Assuming you have a way to get the current batsman index
    const currentBatsmanIndex = getCurrentBatsmanIndex(); // Replace with actual logic
    updatePlayerStats(currentBatsmanIndex, runsScored, isWicket);

    // Update UI
    updateScoreboard(players);
    document.getElementById('runs').textContent = `Runs: ${runs}`;
    document.getElementById('wickets').textContent = `Wickets: ${wickets}`;

    // Handle overs left
    if (runsScored > 0 || isWicket) {
        // Over completed
        oversLeft--;
        document.getElementById('overs-left').textContent = `Overs Left: ${oversLeft}`;
        if (oversLeft <= 0) {
            endInnings();
        }
    }
}

// Function to start the match
function startMatch() {
    // Initialize players and their stats here
    initializePlayers(players); // Populate players with random data or from a database

    updateScoreboard(players);
    document.getElementById('start-match').disabled = true; // Disable start button
    document.getElementById('next-ball').disabled = false; // Enable next ball button
    logEvent('Match Started!');
}

// Function to end the innings
function endInnings() {
    logEvent(`Innings Ended. Total Runs: ${runs}, Wickets: ${wickets}`);
    // You can add logic to switch innings or end the match
}

// Event listeners for buttons
document.getElementById('start-match').addEventListener('click', startMatch);
document.getElementById('next-ball').addEventListener('click', bowlBall);


//t20.js
// t20.js: Simulates a T20 cricket match and manages player statistics




// Function to simulate the T20 match
function simulateT20Match() {
    for (let over = 0; over < totalOvers; over++) {
        for (let ball = 0; ball < 6; ball++) {
            if (wicketsLost >= 10) break; // End if all wickets are lost
            const ballOutcome = simulateBall();
            updateScorecard(ballOutcome);
            teamScore += ballOutcome.runs;
            if (ballOutcome.isWicket) wicketsLost++;
            ballsBowled++;
        }
        if (wicketsLost >= 10) break; // End if all wickets are lost
    }
    finalizeMatch();
}

// Function to simulate a single ball
function simulateBall() {
    const runs = calculateRuns();
    const isWicket = Math.random() < (player.bowling.control.value / 100) ? true : false; // Wicket chance based on bowler's control
    return { runs, isWicket };
}

// Function to calculate runs based on player attributes and match conditions
function calculateRuns() {
    let runs = 0;
    const baseProbability = Math.random(); // Random chance for runs
    const battingAbility = player.batting.powerHitting.value / 100; // Player's power hitting ability

    // Determine runs based on batting ability
    if (baseProbability < battingAbility * 0.1) {
        runs = 6; // Hit a six
    } else if (baseProbability < battingAbility * 0.3) {
        runs = 4; // Hit a four
    } else if (baseProbability < battingAbility * 0.5) {
        runs = 1; // Single
    } else if (baseProbability < battingAbility * 0.7) {
        runs = 2; // Double
    } // else runs = 0 (dot ball)

    return runs;
}

// Function to update the scorecard after each ball
function updateScorecard(ballOutcome) {
    scorecard.push({
        runs: ballOutcome.runs,
        isWicket: ballOutcome.isWicket,
        totalScore: teamScore + ballOutcome.runs,
        wickets: wicketsLost
    });

    // Update player statistics
    player.stats.runsScored += ballOutcome.runs;
    player.stats.matchesPlayed++;

    if (ballOutcome.runs === 6) {
        console.log("SIX!");
    } else if (ballOutcome.runs === 4) {
        console.log("FOUR!");
    } else if (ballOutcome.isWicket) {
        console.log("Wicket!");
    }
}

// Function to finalize the match
function finalizeMatch() {
    console.log(`Total Score: ${teamScore}/${wicketsLost} in ${totalOvers} overs`);
    displayScorecard();
}

// Function to display the scorecard
function displayScorecard() {
    console.log("Scorecard:");
    console.table(scorecard);
}

// Start the T20 match simulation
document.getElementById('startT20Match').addEventListener('click', simulateT20Match);


// scorecard.js
import { players } from './players.js';

// Function to update and display the scorecard
export function updateScorecard(inningData) {
    const scorecardDiv = document.getElementById('scorecard');
    scorecardDiv.innerHTML = ''; // Clear previous scorecard

    // Displaying runs and wickets
    inningData.forEach(inning => {
        const inningDiv = document.createElement('div');
        inningDiv.innerHTML = `
            <h3>Inning: ${inning.inningNumber}</h3>
            <p>Runs: ${inning.runs}</p>
            <p>Wickets: ${inning.wickets}</p>
        `;

        // Display detailed player statistics
        inning.players.forEach(playerIndex => {
            const player = players[playerIndex];
            inningDiv.innerHTML += `
                <p>${player.name}: ${player.experience.performanceHistory.value} runs, ${player.experience.matchesPlayed.value} matches</p>
            `;
        });

        scorecardDiv.appendChild(inningDiv);
    });
}


//save.js
// save.js

// Function to save player data to local storage
function savePlayerData(playerData) {
    try {
        // Convert the player data object to a JSON string
        const jsonData = JSON.stringify(playerData);
        // Save the JSON string to local storage under the key 'playerData'
        localStorage.setItem('playerData', jsonData);
        console.log('Player data saved successfully.');
    } catch (error) {
        console.error('Error saving player data:', error);
    }
}

// Function to load player data from local storage
function loadPlayerData() {
    try {
        // Retrieve the JSON string from local storage
        const jsonData = localStorage.getItem('playerData');
        if (jsonData) {
            // Parse the JSON string back to an object
            const playerData = JSON.parse(jsonData);
            console.log('Player data loaded successfully.');
            return playerData; // Return the loaded player data
        } else {
            console.warn('No player data found in local storage.');
            return null; // Return null if no data is found
        }
    } catch (error) {
        console.error('Error loading player data:', error);
        return null; // Return null in case of error
    }
}

// Function to delete player data from local storage
function deletePlayerData() {
    try {
        localStorage.removeItem('playerData');
        console.log('Player data deleted successfully.');
    } catch (error) {
        console.error('Error deleting player data:', error);
    }
}

// Example usage
// To save player data
const playerData = {
    name: "John Doe",
    skills: {
        batting: {
            powerHitting: 70,
            precision: 80,
            timing: 75
        },
        bowling: {
            swing: 60,
            spin: 50
        }
    },
    matchesPlayed: 5
};

// Save the player data
savePlayerData(playerData);

// Load the player data
const loadedPlayerData = loadPlayerData();
console.log(loadedPlayerData);

// Delete the player data
// deletePlayerData();

export { savePlayerData, loadPlayerData, deletePlayerData };


//promotion.js
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

//playerUtils.js
//import { players } from './players.js'; // Assuming players data is imported from players.js

// Function to initialize player data with random skills and roles
export function initializePlayers(playerList) {
    playerList.forEach((player) => {
        // Randomly generate skills
        player.batting.powerHitting.value = getRandomInt(50, 100);
        player.batting.precision.value = getRandomInt(50, 100);
        player.batting.timing.value = getRandomInt(50, 100);
        player.batting.runningBetweenWickets.value = getRandomInt(50, 100);

        player.bowling.swing.value = getRandomInt(50, 100);
        player.bowling.spin.value = getRandomInt(50, 100);
        player.bowling.control.value = getRandomInt(50, 100);
        player.bowling.pace.value = getRandomInt(70, 90); // Example pace range
        player.bowling.variation.value = getRandomInt(50, 100);

        player.fielding.catching.value = getRandomInt(50, 100);
        player.fielding.throwingAccuracy.value = getRandomInt(50, 100);
        player.fielding.agility.value = getRandomInt(50, 100);

        player.physical.speed.value = getRandomInt(50, 100);
        player.physical.strength.value = getRandomInt(50, 100);
        player.physical.endurance.value = getRandomInt(50, 100);

        player.mental.concentration.value = getRandomInt(50, 100);
        player.mental.aggression.value = getRandomInt(50, 100);
        player.mental.adaptability.value = getRandomInt(50, 100);

        player.experience.matchesPlayed.value = 0; // Start with no matches played
        player.experience.performanceHistory.value = 0;

        player.fitness.injuryHistory.value = 0; // 0 indicates no injury

        // Randomly assign batting and bowling roles
        player.role.battingRole.value = assignBattingRole();
        player.role.bowlingRole.value = assignBowlingRole();
    });
}

// Function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to assign a random batting role
function assignBattingRole() {
    const roles = ['opener', 'middle-order', 'finisher', 'all-rounder'];
    return roles[Math.floor(Math.random() * roles.length)];
}

// Function to assign a random bowling role
function assignBowlingRole() {
    const roles = ['fast', 'medium', 'spin', 'all-rounder'];
    return roles[Math.floor(Math.random() * roles.length)];
}

// Function to update player statistics after a match
export function updatePlayerStats(playerIndex, runs, isWicket) {
    const player = players[playerIndex];

    // Update runs scored and wickets taken
    if (runs > 0) {
        player.experience.performanceHistory.value += runs;
        player.experience.matchesPlayed.value++;
    }

    if (isWicket) {
        player.experience.performanceHistory.value -= 5; // Penalty for getting out
    }

    // Update other relevant statistics here, like average, strike rate, etc.
    // This can be customized based on your game logic
}


// over.js
// over.js
import { simulateBall } from './ball.js';
import { updateScorecard } from './match/scorecard.js';
import { players } from './players.js'; // Import player data if needed

// Function to simulate an over
export function simulateOver(batsman, bowler, innings, totalRuns, oversLeft) {
    let overRuns = 0; // Total runs scored in the over
    let wickets = 0; // Number of wickets fallen in the over

    console.log(`Over started by ${bowler.name}.`);

    for (let ball = 1; ball <= 6; ball++) {
        const result = simulateBall(batsman, bowler, innings, totalRuns, oversLeft);
        overRuns += result.runsScored;

        // Check if a wicket fell
        if (result.wicketFallen) {
            wickets++;
            // If a wicket falls, you may want to update the batsman and handle the new batsman logic here
            // For example, you can pick a new batsman from the available players.
        }
        
        // Update the scorecard after each ball (optional)
        updateScorecard(batsman, bowler, result.runsScored, result.wicketFallen, innings);
    }

    // Log the results of the over
    console.log(`Over completed. Total runs in the over: ${overRuns}, Wickets: ${wickets}.`);

    // Return the total runs and wickets from the over
    return {
        overRuns,
        wickets,
    };
}


// odi.js
// odi.js: Simulates a One Day International (ODI) cricket match and manages player statistics

// Player object structure (this should ideally be imported or defined elsewhere)
let player = {
    batting: {
        powerHitting: { value: 50, min: 0 },
        precision: { value: 50, min: 0 },
        timing: { value: 50, min: 0 },
        runningBetweenWickets: { value: 50, min: 0 }
    },
    bowling: {
        swing: { value: 50, min: 0 },
        spin: { value: 50, min: 0 },
        control: { value: 50, min: 0 },
        pace: { value: 80, min: 80 },
        variation: { value: 50, min: 0 }
    },
    stats: {
        runsScored: 0,
        wicketsTaken: 0,
        centuries: 0,
        halfCenturies: 0,
        average: 0,
        matchesPlayed: 0
    }
};

// Match parameters
const totalOvers = 50;
let teamScore = 0;
let wicketsLost = 0;
let ballsBowled = 0;
const scorecard = [];

// Function to simulate the ODI match
function simulateODIMatch() {
    for (let over = 0; over < totalOvers; over++) {
        for (let ball = 0; ball < 6; ball++) {
            if (wicketsLost >= 10) break; // End if all wickets are lost
            const ballOutcome = simulateBall();
            updateScorecard(ballOutcome);
            teamScore += ballOutcome.runs;
            if (ballOutcome.isWicket) wicketsLost++;
            ballsBowled++;
        }
        if (wicketsLost >= 10) break; // End if all wickets are lost
    }
    finalizeMatch();
}

// Function to simulate a single ball
function simulateBall() {
    const runs = calculateRuns();
    const isWicket = Math.random() < (player.bowling.control.value / 100) ? true : false; // Wicket chance based on bowler's control
    return { runs, isWicket };
}

// Function to calculate runs based on player attributes and match conditions
function calculateRuns() {
    let runs = 0;
    const baseProbability = Math.random(); // Random chance for runs
    const battingAbility = player.batting.powerHitting.value / 100; // Player's power hitting ability

    // Determine runs based on batting ability
    if (baseProbability < battingAbility * 0.1) {
        runs = 6; // Hit a six
    } else if (baseProbability < battingAbility * 0.3) {
        runs = 4; // Hit a four
    } else if (baseProbability < battingAbility * 0.5) {
        runs = 1; // Single
    } else if (baseProbability < battingAbility * 0.7) {
        runs = 2; // Double
    } // else runs = 0 (dot ball)

    return runs;
}

// Function to update the scorecard after each ball
function updateScorecard(ballOutcome) {
    scorecard.push({
        runs: ballOutcome.runs,
        isWicket: ballOutcome.isWicket,
        totalScore: teamScore + ballOutcome.runs,
        wickets: wicketsLost
    });

    // Update player statistics
    player.stats.runsScored += ballOutcome.runs;
    player.stats.matchesPlayed++;

    if (ballOutcome.runs === 6) {
        console.log("SIX!");
    } else if (ballOutcome.runs === 4) {
        console.log("FOUR!");
    } else if (ballOutcome.isWicket) {
        console.log("Wicket!");
    }
}

// Function to finalize the match
function finalizeMatch() {
    console.log(`Total Score: ${teamScore}/${wicketsLost} in ${totalOvers} overs`);
    displayScorecard();
}

// Function to display the scorecard
function displayScorecard() {
    console.log("Scorecard:");
    console.table(scorecard);
}

// Start the ODI match simulation
document.getElementById('startODIMatch').addEventListener('click', simulateODIMatch);


// mach.js
import { players } from './players.js';
import { initializePlayers } from './playerUtils.js';
import { simulateMatch } from './matchSimulation.js'; // Hypothetical match simulation logic

export function startMatch() {
    if (players.length === 0) {
        alert('No players available to start a match. Please create a player first.');
        return;
    }

    // Simulate match based on players' skills and other criteria
    simulateMatch(players);
}

// Initialize players before starting the match
initializePlayers(players);


//league.js
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


// innings.js
import { simulateOver } from './over.js';
import { updateScorecard } from './scorecard.js';
import { players } from './players.js'; // Import player data if needed
import { getNextBatsman } from './playerSelection.js'; // Import function to select next batsman

// Function to simulate an innings
export function simulateInnings(battingTeam, bowlingTeam, totalOvers) {
    let totalRuns = 0; // Total runs scored in the innings
    let wickets = 0; // Total wickets fallen in the innings
    let oversCompleted = 0; // Count of completed overs
    let batsmen = [battingTeam[0]]; // Start with the first batsman

    while (oversCompleted < totalOvers && wickets < 10) {
        console.log(`Starting Over ${oversCompleted + 1}`);

        // Simulate an over
        const { overRuns, wickets: overWickets } = simulateOver(batsmen[0], bowlingTeam[oversCompleted % bowlingTeam.length], totalRuns, totalOvers - oversCompleted);

        totalRuns += overRuns;
        wickets += overWickets;

        // Update the scorecard for the innings
        updateScorecard(batsmen[0], bowlingTeam[oversCompleted % bowlingTeam.length], overRuns, overWickets > 0, { totalRuns, wickets, oversCompleted });

        // Update overs completed
        oversCompleted++;

        // If a wicket fell, replace the batsman
        if (overWickets > 0) {
            batsmen[0] = getNextBatsman(battingTeam, wickets); // Get the next batsman
        }
    }

    // Log final results of the innings
    console.log(`Innings Completed. Total Runs: ${totalRuns}, Wickets: ${wickets}.`);
    return { totalRuns, wickets };
}


// innings.js
import { simulateOver } from './over.js';
import { updateScorecard } from './scorecard.js';
import { players } from './players.js'; // Import player data if needed
import { getNextBatsman } from './playerSelection.js'; // Import function to select next batsman

// Function to simulate an innings
export function simulateInnings(battingTeam, bowlingTeam, totalOvers) {
    let totalRuns = 0; // Total runs scored in the innings
    let wickets = 0; // Total wickets fallen in the innings
    let oversCompleted = 0; // Count of completed overs
    let batsmen = [battingTeam[0]]; // Start with the first batsman

    while (oversCompleted < totalOvers && wickets < 10) {
        console.log(`Starting Over ${oversCompleted + 1}`);

        // Simulate an over
        const { overRuns, wickets: overWickets } = simulateOver(batsmen[0], bowlingTeam[oversCompleted % bowlingTeam.length], totalRuns, totalOvers - oversCompleted);

        totalRuns += overRuns;
        wickets += overWickets;

        // Update the scorecard for the innings
        updateScorecard(batsmen[0], bowlingTeam[oversCompleted % bowlingTeam.length], overRuns, overWickets > 0, { totalRuns, wickets, oversCompleted });

        // Update overs completed
        oversCompleted++;

        // If a wicket fell, replace the batsman
        if (overWickets > 0) {
            batsmen[0] = getNextBatsman(battingTeam, wickets); // Get the next batsman
        }
    }

    // Log final results of the innings
    console.log(`Innings Completed. Total Runs: ${totalRuns}, Wickets: ${wickets}.`);
    return { totalRuns, wickets };
}


// Hide all sections
function hideAllSections() {
    playerProfileSection.classList.add('hidden');
    matchScheduleSection.classList.add('hidden');
    leagueStandingsSection.classList.add('hidden');
    playerRankingsSection.classList.add('hidden');
    createPlayerSection.classList.add('hidden');
}

// Show the player profile section by default
document.addEventListener('DOMContentLoaded', () => {
    hideAllSections();
    loadPlayerProfile();
    playerProfileSection.classList.remove('hidden');
});// API Endpoints (adjust according to your actual backend endpoints)
const playerApiEndpoint = '/api/player';
const matchesApiEndpoint = '/api/matches';
const leagueStandingsApiEndpoint = '/api/leagueStandings';
const rankingsApiEndpoint = '/api/playerRankings';
const createPlayerApiEndpoint = '/api/createPlayer';

// Sidebar links
const viewProfileLink = document.getElementById('view-profile-link');
const matchScheduleLink = document.getElementById('match-schedule-link');
const leagueStandingsLink = document.getElementById('league-standings-link');
const playerRankingsLink = document.getElementById('player-rankings-link');
const createPlayerLink = document.getElementById('create-player-link');

// Sections
const playerProfileSection = document.getElementById('player-profile');
const matchScheduleSection = document.getElementById('match-schedule');
const leagueStandingsSection = document.getElementById('league-standings');
const playerRankingsSection = document.getElementById('player-rankings');
const createPlayerSection = document.getElementById('create-player');

// Hide all sections
function hideAllSections() {
    playerProfileSection.classList.add('hidden');
    matchScheduleSection.classList.add('hidden');
    leagueStandingsSection.classList.add('hidden');
    playerRankingsSection.classList.add('hidden');
    createPlayerSection.classList.add('hidden');
}

// Show the player profile section by default
document.addEventListener('DOMContentLoaded', () => {
    hideAllSections();
    loadPlayerProfile();
    playerProfileSection.classList.remove('hidden');
});

// Event listeners for sidebar links
viewProfileLink.addEventListener('click', () => {
    hideAllSections();
    loadPlayerProfile();
    playerProfileSection.classList.remove('hidden');
});

matchScheduleLink.addEventListener('click', () => {
    hideAllSections();
    updateMatchSchedule();
    matchScheduleSection.classList.remove('hidden');
});

leagueStandingsLink.addEventListener('click', () => {
    hideAllSections();
    updateLeagueStandings();
    leagueStandingsSection.classList.remove('hidden');
});

playerRankingsLink.addEventListener('click', () => {
    hideAllSections();
    updateRankings();
    playerRankingsSection.classList.remove('hidden');
});

createPlayerLink.addEventListener('click', () => {
    hideAllSections();
    createPlayerSection.classList.remove('hidden');
});

// Function to create a new player
document.getElementById('create-player-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const playerName = document.getElementById('player-name').value;
    const playerAge = document.getElementById('player-age').value;
    const playerRole = document.getElementById('player-role').value;

    try {
        const response = await fetch(createPlayerApiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: playerName,
                age: playerAge,
                role: playerRole
            })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Player created successfully!');
        } else {
            alert('Error creating player: ' + result.message);
        }
    } catch (error) {
        console.error('Error creating player:', error);
    }
});

// Load player profile
async function loadPlayerProfile() {
    try {
        const response = await fetch(playerApiEndpoint);
        const playerData = await response.json();

        playerProfileSection.innerHTML = `
            <p><strong>Name:</strong> ${playerData.name}</p>
            <p><strong>Age:</strong> ${playerData.age}</p>
            <p><strong>Team:</strong> ${playerData.team}</p>
            <p><strong>Role:</strong> ${playerData.role}</p>
            <p><strong>Matches Played:</strong> ${playerData.matchesPlayed}</p>
        `;
    } catch (error) {
        console.error('Error loading player profile:', error);
    }
}

// Load match schedule
async function updateMatchSchedule() {
    try {
        const response = await fetch(matchesApiEndpoint);
        const matches = await response.json();

        const matchList = matchScheduleSection.querySelector('ul');
        matchList.innerHTML = '';

        matches.forEach(match => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${match.opponent}</strong> - ${match.date}`;
            matchList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading match schedule:', error);
    }
}

// Load league standings
async function updateLeagueStandings() {
    try {
        const response = await fetch(leagueStandingsApiEndpoint);
        const standings = await response.json();

        const standingsList = leagueStandingsSection.querySelector('ul');
        standingsList.innerHTML = '';

        standings.forEach(team => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${team.name}</strong> - ${team.points} points`;
            standingsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading league standings:', error);
    }
}

// Load player rankings
async function updateRankings() {
    try {
        const response = await fetch(rankingsApiEndpoint);
        const rankings = await response.json();

        const rankingsList = playerRankingsSection.querySelector('ul');
        rankingsList.innerHTML = '';

        rankings.forEach(player => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${player.rank}. ${player.name}</strong> - ${player.points} points`;
            rankingsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading player rankings:', error);
    }
};


// Event listeners for sidebar links
viewProfileLink.addEventListener('click', () => {
    hideAllSections();
    loadPlayerProfile();
    playerProfileSection.classList.remove('hidden');
});

matchScheduleLink.addEventListener('click', () => {
    hideAllSections();
    updateMatchSchedule();
    matchScheduleSection.classList.remove('hidden');
});

leagueStandingsLink.addEventListener('click', () => {
    hideAllSections();
    updateLeagueStandings();
    leagueStandingsSection.classList.remove('hidden');
});

playerRankingsLink.addEventListener('click', () => {
    hideAllSections();
    updateRankings();
    playerRankingsSection.classList.remove('hidden');
});

createPlayerLink.addEventListener('click', () => {
    hideAllSections();
    createPlayerSection.classList.remove('hidden');
});

// Function to create a new player
document.getElementById('create-player-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const playerName = document.getElementById('player-name').value;
    const playerAge = document.getElementById('player-age').value;
    const playerRole = document.getElementById('player-role').value;

    try {
        const response = await fetch(createPlayerApiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: playerName,
                age: playerAge,
                role: playerRole
            })
        });

        const result = await response.json();
        if (response.ok) {
            alert('Player created successfully!');
        } else {
            alert('Error creating player: ' + result.message);
        }
    } catch (error) {
        console.error('Error creating player:', error);
    }
});

// Load player profile
async function loadPlayerProfile() {
    try {
        const response = await fetch(playerApiEndpoint);
        const playerData = await response.json();

        playerProfileSection.innerHTML = `
            <p><strong>Name:</strong> ${playerData.name}</p>
            <p><strong>Age:</strong> ${playerData.age}</p>
            <p><strong>Team:</strong> ${playerData.team}</p>
            <p><strong>Role:</strong> ${playerData.role}</p>
            <p><strong>Matches Played:</strong> ${playerData.matchesPlayed}</p>
        `;
    } catch (error) {
        console.error('Error loading player profile:', error);
    }
}

// Load match schedule
async function updateMatchSchedule() {
    try {
        const response = await fetch(matchesApiEndpoint);
        const matches = await response.json();

        const matchList = matchScheduleSection.querySelector('ul');
        matchList.innerHTML = '';

        matches.forEach(match => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${match.opponent}</strong> - ${match.date}`;
            matchList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading match schedule:', error);
    }
}

// Load league standings
async function updateLeagueStandings() {
    try {
        const response = await fetch(leagueStandingsApiEndpoint);
        const standings = await response.json();

        const standingsList = leagueStandingsSection.querySelector('ul');
        standingsList.innerHTML = '';

        standings.forEach(team => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${team.name}</strong> - ${team.points} points`;
            standingsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading league standings:', error);
    }
}

// Load player rankings
async function updateRankings() {
    try {
        const response = await fetch(rankingsApiEndpoint);
        const rankings = await response.json();

        const rankingsList = playerRankingsSection.querySelector('ul');
        rankingsList.innerHTML = '';

        rankings.forEach(player => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${player.rank}. ${player.name}</strong> - ${player.points} points`;
            rankingsList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error loading player rankings:', error);
    }
};

//create-player.js
// Import necessary modules
import { generateRandomSkill, assignRoles } from './playerUtils.js';

// Function to create a new player
function createPlayer() {
    // Basic Player Info
    const playerName = document.getElementById('player-name').value;
    const playerAge = parseInt(document.getElementById('player-age').value);
    const playerCountry = document.getElementById('player-country').value;

    // Initialize player object with basic info
    const player = {
        name: playerName,
        age: playerAge,
        country: playerCountry,
        batting: {
            powerHitting: { value: generateRandomSkill(0, 100), min: 0 },
            precision: { value: generateRandomSkill(0, 100), min: 0 },
            timing: { value: generateRandomSkill(0, 100), min: 0 },
            runningBetweenWickets: { value: generateRandomSkill(0, 100), min: 0 }
        },
        bowling: {
            swing: { value: generateRandomSkill(0, 100), min: 0 },
            spin: { value: generateRandomSkill(0, 100), min: 0 },
            control: { value: generateRandomSkill(0, 100), min: 0 },
            pace: { value: generateRandomSkill(80, 160), min: 80 },
            variation: { value: generateRandomSkill(0, 100), min: 0 }
        },
        fielding: {
            catching: { value: generateRandomSkill(0, 100), min: 0 },
            throwingAccuracy: { value: generateRandomSkill(0, 100), min: 0 },
            agility: { value: generateRandomSkill(0, 100), min: 0 }
        },
        physical: {
            speed: { value: generateRandomSkill(0, 100), min: 0 },
            strength: { value: generateRandomSkill(0, 100), min: 0 },
            endurance: { value: generateRandomSkill(0, 100), min: 0 }
        },
        mental: {
            concentration: { value: generateRandomSkill(0, 100), min: 0 },
            aggression: { value: generateRandomSkill(0, 100), min: 0 },
            adaptability: { value: generateRandomSkill(0, 100), min: 0 }
        },
        experience: {
            matchesPlayed: { value: 0, min: 0 },
            performanceHistory: { value: 0, min: 0 }
        },
        fitness: {
            injuryHistory: { value: 0, min: 0 } // 0 means no injury
        },
        role: {
            battingRole: { value: "", min: 0 }, // To be determined later
            bowlingRole: { value: "", min: 0 }  // To be determined later
        },
        preferences: {
            shotSelection: { value: "cover drive", min: 0 }, // Default shot selection
            bowlingStrategy: { value: "death overs", min: 0 } // Default bowling strategy
        },
        careerStats: {
            matchesPlayed: 0,
            runsScored: 0,
            wicketsTaken: 0,
            centuries: 0,
            halfCenturies: 0,
            battingAverage: 0,
            bowlingAverage: 0,
            stamina: 100 // Initialize stamina
        }
    };

    // Randomly assign the player's roles based on their skills
    assignRoles(player);

    // Save the player data (you can modify this to save on server or locally)
    savePlayerData(player);
    alert(`${player.name} has been created!`);
}

// Function to generate random skills for the player
function generateRandomSkill(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to save player data (could be server-side or local storage)
function savePlayerData(player) {
    // Example saving to local storage for now
    let players = JSON.parse(localStorage.getItem('players')) || [];
    players.push(player);
    localStorage.setItem('players', JSON.stringify(players));
}

// Event listener for form submission
document.getElementById('create-player-form').addEventListener('submit', (e) => {
    e.preventDefault();
    createPlayer();
});



//ratingSystem.js
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
