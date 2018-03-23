import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

// Initialize express
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Logger that outputs all requests into the console
app.use(morgan("combined"));

// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fucci_db",
);

// Launch the server on port 3000
const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
