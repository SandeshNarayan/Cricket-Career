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
        this.batsmenCount = 0;
        this.bowlersCount = 0;
        this.keeperCount = 0;
    }

    // Add a player to the team based on their role
    addPlayer(player) {
        if (player.role.battingRole && this.batsmenCount < 6) {
            this.players.push(player);
            this.batsmenCount++;
        } else if (player.role.bowlingRole && this.bowlersCount < 5) {
            this.players.push(player);
            this.bowlersCount++;
        } else if (player.role.battingRole === "wicketkeeper" && this.keeperCount < 1) {
            this.players.push(player);
            this.keeperCount++;
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

    // Assign players to teams, ensuring team balance
    assignPlayers(players) {
        for (let i = 0; i < players.length; i++) {
            const team = this.teams[i % this.teams.length];
            team.addPlayer(players[i]);
        }
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

// Create leagues
const leagues = [
    new League("League 1", 25, 1),
    new League("League 2", 20, 2),
    new League("League 3", 15, 3),
    new League("League 4", 10, 4),
    new League("League 5", 5, 5),
    new League("Pro League", 10, 0),
    new League("International", 10, -1)
];

// Assign players to teams
leagues.forEach(league => {
    const players = generatePlayers();
    league.assignPlayers(players);
});

// Display players in a team
leagues.forEach(league => {
    league.teams.forEach(team => {
        console.log(`Team: ${team.name}`);
        team.players.forEach(player => {
            console.log(`${player.name} - Role: ${player.role.battingRole || player.role.bowlingRole}`);
        });
        console.log('\n');
    });
});
