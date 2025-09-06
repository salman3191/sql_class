const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");

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
// inserting new data
let q = "INSERT INTO user(id,username,email,password)VALUES ?";
let data = [];
for (let i = 0; i < 100; i++) {
  data.push(togetRandomUser()); //100 fake users data
  // console.log(togetRandomUser());
}

try {
  connection.query(q, [data], (err, result) => {
    if (err) throw err;
    console.log(result); // results contains rows returned by server
    console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

// console.log(togetRandomUser());
