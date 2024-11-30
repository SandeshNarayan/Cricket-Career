class TeamMilestones {
    constructor(team) {
        this.team = team;
        this.milestones = [];
    }

    checkTeamMilestones() {
        if (this.team.championships >= 3) {
            this.milestones.push('Hat-Trick of Championships');
        }
        if (this.team.matchRecords.some(record => record.score >= 300)) {
            this.milestones.push('300+ Runs in a Match');
        }
    }
}
