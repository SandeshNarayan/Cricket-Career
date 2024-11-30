class TeamProgression {
    constructor(team) {
        this.team = team;
    }

    improveTeamChemistry() {
        this.team.chemistry += 0.05 * this.team.players.length; // Increase chemistry based on the number of players
        this.team.chemistry = Math.min(100, this.team.chemistry); // Cap the chemistry at 100
    }

    teamSkillAverage() {
        return this.team.players.reduce((acc, player) => acc + player.skillLevel, 0) / this.team.players.length;
    }
}
