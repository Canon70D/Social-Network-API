const userSeed = [
  {
    username: "Name 1",
    email: "name1@email.com",
  },
  {
    username: "Name 2",
    email: "name2@email.com",
  },
  {
    username: "Name 3",
    email: "name3@email.com",
  },
];

const thoughtSeed = [
  {
    thoughtText: "thought thougt thought 1",
    reactions: [
      {
        reactionBody: "reaction reaction reaction 1",
        username: "Name 1",
      },
    ],
  },
  {
    thoughtText: "thought thougt thought 2",
    reactions: [
      {
        reactionBody: "reaction reaction reaction 2",
        username: "Name 3",
      },
    ],
  },
];

module.exports = { userSeed, thoughtSeed };
