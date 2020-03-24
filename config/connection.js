var mysql = require("mysql");

var connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else{

  mysql.createConnection({
      host: "dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
      user: "zj6koinpilghbyzh",
      password: "gumf3l5ql63ntgy2",
      database: "i7su9zp5tr2eqccx"
});
};
// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;