const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sigma_app",
  password: "salman@2003",
});

let q = "INSERT INTO user(id,username,email,password)VALUES(?,?,?,?)";
let user = ["123", "123_newuser", "abc12@gmai.com", "abc"];
try {
  connection.query(q, user, (err, result) => {
    if (err) throw err;
    console.log(result); // results contains rows returned by server
    console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();
let togetRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),

    password: faker.internet.password(),
  };
};
// console.log(togetRandomUser());
