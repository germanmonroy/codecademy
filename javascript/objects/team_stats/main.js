const team = {
  _players: [
    {
      firstName: "Germán",
      lastName: "Monroy",
      age: 31,
    },
    {
      firstName: "Andrea",
      lastName: "Ackerman",
      age: 31,
    },
    {
      firstName: "Carlos",
      lastName: "Quintero",
      age: 34,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: "Foncos",
      teamPoints: 47,
      opponentPoints: 2,
    },
    {
      opponent: "Sponcos",
      teamPoints: 90,
      opponentPoints: 5,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    const player = {
      firstName,
      lastName,
      age,
    };

    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints,
    };

    this._games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

console.log(team._players);

team.addGame("Toncos", 1000, 2);
team.addGame("Floncos", 10000, 1);
team.addGame("Proncos", 30, 2);

console.log(team._games);
