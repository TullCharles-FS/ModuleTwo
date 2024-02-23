require("dotenv").config();
const app = require("./app");
const connectDB = require("./app/db/config");

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
});
