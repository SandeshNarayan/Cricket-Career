// league.test.js
import League from './League';
import Team from './Team';
import Match from './Match';

test('League standings should update after a match', () => {
    const league = new League();
    const teamA = new Team('Australia');
    const teamB = new Team('New Zealand');

    teamA.addPlayer(new Player('Batsman A', 28, 'Batsman'));
    teamB.addPlayer(new Player('Bowler B', 30, 'Bowler'));

    league.addTeam(teamA);
    league.addTeam(teamB);

    const match = new Match(teamA, teamB);
    match.playMatch();

    league.updateStandings();

    expect(league.standings[0].teamName).toBe('Australia');  // Team A wins, moves up
});
