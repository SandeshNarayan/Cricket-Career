class SeasonTransition {
    constructor(league) {
        this.league = league;
    }

    endOfSeasonReview() {
        this.league.teams.forEach(team => {
            team.players.forEach(player => {
                player.applyAgingEffect(); // Apply aging to each player
                player.improveSkills(0, 0); // Improve based on their season's performance
            });
        });
    }

    retireOldPlayers() {
        this.league.teams.forEach(team => {
            team.players = team.players.filter(player => player.age < 38); // Remove old players
        });
    }

    recruitNewPlayers() {
        this.league.teams.forEach(team => {
            while (team.players.length < 11) {
                const newPlayer = generateNewPlayer(); // Function to create new young players
                team.addPlayer(newPlayer);
            }
        });
    }
}
