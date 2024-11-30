class PlayerAchievements {
    constructor(player) {
        this.player = player;
        this.milestones = [];
    }

    checkForMilestones() {
        if (this.player.totalRuns >= 10000) {
            this.milestones.push('10,000 Career Runs');
        }
        if (this.player.totalWickets >= 500) {
            this.milestones.push('500 Career Wickets');
        }
    }
}
