
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectToDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connection = await mongoose.connect(process.env.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToDB;
