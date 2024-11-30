class TeamAchievements {
    constructor(team) {
        this.team = team;
        this.achievements = [];
    }

    checkForAchievements() {
        if (this.team.championships > 5) {
            this.achievements.push('Legendary Team');
        }
        if (this.team.wins > 50) {
            this.achievements.push('50 Match Wins');
        }
    }
}
