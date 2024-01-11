const db = require("../config/connection");
const { Word } = require("../models");

const wordData = require("./wordData.json");

db.once("open", async () => {
  await Word.deleteMany({});

  const words = await Word.insertMany(wordData);

  console.log("words seeded!🌱");
  process.exit(0);
});
