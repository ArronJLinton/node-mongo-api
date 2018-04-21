const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes");
const PORT = process.env.PORT || 4000;
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
  "mongodb: //arron:root@ds013981.mlab.com:13981/fucci_db"
);

// Launch the server on port 3000
const server = app.listen(PORT, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
