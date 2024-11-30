class Player {
    constructor(name, role) {
        this.name = name;
        this.role = role;
        this.batting = {
            powerHitting: { value: this.randomStat(), min: 0 },
            precision: { value: this.randomStat(), min: 0 },
            timing: { value: this.randomStat(), min: 0 },
            runningBetweenWickets: { value: this.randomStat(), min: 0 }
        };
        this.bowling = {
            swing: { value: role === "bowler" ? this.randomStat() : 0, min: 0 },
            spin: { value: role === "bowler" ? this.randomStat() : 0, min: 0 },
            control: { value: role === "bowler" ? this.randomStat() : 0, min: 0 },
            pace: { value: role === "bowler" ? this.randomStat(80, 140) : 80, min: 80 },
            variation: { value: role === "bowler" ? this.randomStat() : 0, min: 0 }
        };
        this.fielding = {
            catching: { value: this.randomStat(), min: 0 },
            throwingAccuracy: { value: this.randomStat(), min: 0 },
            agility: { value: this.randomStat(), min: 0 }
        };
        this.physical = {
            speed: { value: this.randomStat(), min: 0 },
            strength: { value: this.randomStat(), min: 0 },
            endurance: { value: this.randomStat(), min: 0 }
        };
        this.mental = {
            concentration: { value: this.randomStat(), min: 0 },
            aggression: { value: this.randomStat(), min: 0 },
            adaptability: { value: this.randomStat(), min: 0 }
        };
        this.experience = {
            matchesPlayed: { value: 0, min: 0 },
            performanceHistory: { value: 0, min: 0 }
        };
        this.fitness = {
            injuryHistory: { value: 0, min: 0 } // 0 indicates no injury
        };
        this.role = {
            battingRole: role === "batsman" ? this.randomBattingRole() : "",
            bowlingRole: role === "bowler" ? this.randomBowlingRole() : ""
        };
        this.preferences = {
            shotSelection: this.randomShotSelection(),
            bowlingStrategy: this.randomBowlingStrategy()
        };
    }

    // Generate random stats between 0 and 100
    randomStat(min = 0, max = 100) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Random roles
    randomBattingRole() {
        const roles = ["opener", "middle-order", "finisher"];
        return roles[Math.floor(Math.random() * roles.length)];
    }

    randomBowlingRole() {
        const roles = ["fast", "spin", "medium"];
        return roles[Math.floor(Math.random() * roles.length)];
    }

    randomShotSelection() {
        const shots = ["cover drive", "pull", "cut", "straight drive"];
        return shots[Math.floor(Math.random() * shots.length)];
    }

    randomBowlingStrategy() {
        const strategies = ["death overs", "powerplay", "middle overs"];
        return strategies[Math.floor(Math.random() * strategies.length)];
    }
}

class Team {
    constructor(name, leagueLevel) {
        this.name = name;
        this.leagueLevel = leagueLevel;
        this.players = []; // Will hold Player objects
        this.wins = 0;
        this.losses = 0;
    }

    // Add a player to the team
    addPlayer(player) {
        this.players.push(player);
    }

    // Get a player's performance
    simulatePerformance() {
        return this.players.reduce((acc, player) => {
            return acc + player.batting.powerHitting.value + player.bowling.pace.value;
        }, 0);
    }

    // Simulate a match between this team and another
    playMatch(opponent) {
        const thisTeamPerformance = this.simulatePerformance();
        const opponentPerformance = opponent.simulatePerformance();

        if (thisTeamPerformance > opponentPerformance) {
            this.wins++;
            opponent.losses++;
            return `${this.name} wins`;
        } else {
            this.losses++;
            opponent.wins++;
            return `${opponent.name} wins`;
        }
    }
}

class League {
    constructor(name, numberOfTeams, leagueLevel) {
        this.name = name;
        this.numberOfTeams = numberOfTeams;
        this.leagueLevel = leagueLevel;
        this.teams = [];

        for (let i = 0; i < numberOfTeams; i++) {
            this.teams.push(new Team(`Team ${i + 1} in ${name}`, leagueLevel));
        }
    }

    // Assign players to teams, ensuring balance
    assignPlayers(players) {
        for (let i = 0; i < players.length; i++) {
            const team = this.teams[i % this.teams.length];
            team.addPlayer(players[i]);
        }
    }

    // Simulate a league season (round-robin)
    playSeason() {
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = i + 1; j < this.teams.length; j++) {
                const result = this.teams[i].playMatch(this.teams[j]);
                console.log(result);
            }
        }
    }

    // Promote top teams to the next league
    promoteTeams() {
        const promotedTeams = this.teams
            .sort((a, b) => b.wins - a.wins)
            .slice(0, 2); // Promote the top 2 teams
        return promotedTeams;
    }
}

class Tournament {
    constructor(name, teams, format) {
        this.name = name;
        this.teams = teams;
        this.format = format; // "ODI", "Test", "T20"
    }

    // Simulate the tournament
    playTournament() {
        console.log(`Starting ${this.name} (${this.format}) tournament`);
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = i + 1; j < this.teams.length; j++) {
                const result = this.teams[i].playMatch(this.teams[j]);
                console.log(result);
            }
        }
        console.log(`Ending ${this.name} tournament`);
    }
}

// Generate 12 random players
function generatePlayers() {
    const roles = ["batsman", "bowler", "wicketkeeper"];
    const players = [];

    for (let i = 0; i < 12; i++) {
        const randomRole = roles[Math.floor(Math.random() * roles.length)];
        players.push(new Player(`Player ${i + 1}`, randomRole));
    }
    return players;
}

// Create leagues and assign players
const leagues = [
    new League("League 1", 25, 1),
    new League("League 2", 20, 2),
    new League("League 3", 15, 3),
    new League("League 4", 10, 4),
    new League("League 5", 5, 5),
    new League("Pro League", 10, 0)
];

// Assign players to teams and simulate seasons
leagues.forEach(league => {
    const players = generatePlayers();
    league.assignPlayers(players);
    league.playSeason();

    // Promote teams if not the top league
    if (league.leagueLevel > 1) {
        const promotedTeams = league.promoteTeams();
        console.log(`Promoting teams from ${league.name}:`, promotedTeams.map(team => team.name));
    }
});

// International Teams and Tournaments
const internationalTeams = [
    new Team("India", -1),
    new Team("Australia", -1),
    new Team("England", -1),
    new Team("South Africa", -1),
    new Team("New Zealand", -1),
    new Team("Pakistan", -1),
    new Team("Sri Lanka", -1),
    new Team("West Indies", -1),
    new Team("Bangladesh", -1),
    new Team("Afghanistan", -1)
];

// Create international tournaments
const worldCup = new Tournament("World Cup", internationalTeams, "ODI");
const continentalCup = new Tournament("Continental Cup", internationalTeams, "Test");

// Play international tournaments
worldCup.playTournament();
continentalCup.playTournament();

// Function to simulate a full year of cricket for all teams and leagues
function simulateYear() {
    console.log("Starting a new year of cricket...");

    // Simulate leagues
    leagues.forEach(league => {
        console.log(`\nSimulating season for ${league.name}`);
        league.playSeason();
        
        // Promote teams if not the top league
        if (league.leagueLevel > 1) {
            const promotedTeams = league.promoteTeams();
            console.log(`Promoting teams from ${league.name}:`, promotedTeams.map(team => team.name));
        }
    });

    // Play international tournaments
    console.log("\nPlaying international tournaments...");
    worldCup.playTournament();
    continentalCup.playTournament();

    console.log("Year simulation complete.");
}

// Simulate a full year
simulateYear();

