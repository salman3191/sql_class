const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sigma_app",
  password: "salman@2003",
});

let q = "INSERT INTO user(id,username,email,password)VALUES ?";
let users = [
  ["123a", "123_newusera", "abc12@gmai.coma", "abca"],
  ["123b", "123_newuserb", "abc12@gmai.comb", "abcb"],
];
try {
  connection.query(q, [users], (err, result) => {
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
