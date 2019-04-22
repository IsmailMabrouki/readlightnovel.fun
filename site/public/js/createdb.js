"use strict";
var sql = require("sqlite3");
var db = new sql.Database("data.db");
db.serialize(create);

function create() {
    db.run("create table bookmark (id, novel, chapter)");
    db.run("insert into bookmark values (01,'Pride and Prejudice', 1)");
    db.run("insert into bookmark values (02,'Pride and Prejudice', 5)");
}