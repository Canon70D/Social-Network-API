const connection = require("../config/connection");
const { User, Thought } = require("../models");
const { userSeed, thoughtSeed } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  console.log("Seed Start");

  await User.collection.insertMany(userSeed);
  await Thought.collection.insertMany(thoughtSeed);

  console.log("Seed Done");
});
