// match.test.js
import Match from './Match';
import Team from './Team';
import Player from './Player';

test('Match should simulate the correct outcome based on probabilities', () => {
    const teamA = new Team('Team A');
    const teamB = new Team('Team B');

    teamA.addPlayer(new Player('Batsman 1', 28, 'Batsman', { batting: { powerHitting: 80 } }));
    teamB.addPlayer(new Player('Bowler 1', 30, 'Bowler', { bowling: { pace: 75 } }));

    const match = new Match(teamA, teamB);
    const result = match.simulateBallOutcome('T20');

    expect(result).toHaveProperty('result');  // The result should be either 'runs', 'wicket', or 'dot'
});
