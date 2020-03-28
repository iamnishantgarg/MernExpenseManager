const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(
      `MongoDB connected:${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
