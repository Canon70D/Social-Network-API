const connection = require("../config/connection");
const ObjectId = require("mongodb").ObjectId;
const { Thought, User } = require("../models");
const {
  getRandomName,
  getRandomThought,
  getRandomReaction,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing usesrs
  await User.deleteMany({});

  // Drop existing thought
  await Thought.deleteMany({});

  // Create empty array to hold the user
  const usesrList = [];

  for (let i = 0; i < 10; i++) {
    const username = getRandomName();
    const email = `${username}@email.com`;
    const thoughtText = getRandomThought();
  }

  // Log out the seed data to indicate what should appear in the database
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
