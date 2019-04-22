"use strict";
var sql = require("sqlite3");
var db = new sql.Database("data.db");
db.serialize(create);

function create() {
    db.run("create table novel (title, chapter, content)");
    db.run("insert into bookmark values ('Pride and Prejudice', 1, ''
    )");
    db.run("insert into bookmark values ('Pride and Prejudice', 2)");
}