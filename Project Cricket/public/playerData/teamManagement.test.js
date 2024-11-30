// teamManagement.test.js
import TeamManagement from './TeamManagement';
import Match from './Match';
import Team from './Team';
import Player from './Player';

test('Managing team roster should impact match outcomes', () => {
    const teamManagement = new TeamManagement();
    const team = new Team('South Africa');

    const weakPlayer = new Player('Weak Player', 25, 'Batsman', { batting: { powerHitting: 40 } });
    const strongPlayer = new Player('Strong Player', 25, 'Batsman', { batting: { powerHitting: 90 } });

    team.addPlayer(weakPlayer);
    teamManagement.replacePlayer(team, weakPlayer, strongPlayer);  // Replace weak player with a stronger one

    const team2 = new Team('Pakistan');
    const match = new Match(team, team2);

    match.playMatch();

    expect(match.result.winningTeam).toBe('South Africa'); // South Africa wins due to the stronger player
});
