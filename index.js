const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("views", Path.join(__dirname, "/views"));

const port = 8080;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sigma_app",
  password: "salman@2003",
});

let togetRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM user";

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result[0]["COUNT(*)"]); // results contains rows returned by server
      res.send("sucess");
    });
  } catch (err) {
    console.log(err);
  }
  // connection.end();
});

app.listen(port, () => {
  console.log("server is listening to port 8080");
});

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result); // results contains rows returned by server
//     console.log(result.length);
//   });
// } catch (err) {
//   console.log(err);
// }
// connection.end();
