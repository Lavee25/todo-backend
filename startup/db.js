const mongoose = require("mongoose");
const dburl = process.env.DATABASE_URL;
module.exports = async () => {
  await mongoose.connect(dburl)
    .then(() => {
      console.log("app connected to database");
    })
    .catch((err) => console.log("failed to connect", err));
};
