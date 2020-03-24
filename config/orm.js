const connection = require("./connection.js");

const orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    create: function (table, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (name) VALUES (?)";
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function (table, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += "devoured = 1";
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;