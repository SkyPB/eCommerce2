const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

app.use(cors());
dotenv.config();

// serve static directory dist folder

// Create a connection pool
// const pool = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT,
// });
// console.log(process.env.DB_HOST);

// // Query the database
// pool.query("SELECT * FROM products", (err, rows) => {
//   if (err) throw err;
//   console.log(rows);
// });

// MySQL Configs.
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.use(express.static(path.join(__dirname, "..", "dist")));

// Defining API endpoint to fetch products from DB
app.get("/", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.get("/catalog", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.get("/catalog", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.get("/api/catalog", (req, res) => {
  db.query("SELECT * FROM new_products", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.send(results);
    }
  });
});

app.get("/refund-policy", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.get("/signin", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.get("/register", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.get("/cart", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

app.get("*", (req, res) => {
  res.send(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
