// CREATE TABLE "membership" (
// 	"id"	TEXT NOT NULL UNIQUE,
// 	"password"	TEXT NOT NULL,
// 	"bmBookName"	TEXT NOT NULL,
// 	"bmChapter"	TEXT NOT NULL,
// 	PRIMARY KEY("id","bmBookName","bmChapter")
// );

"use strict";
var sql = require("sqlite3");
var db = new sql.Database("data.db");
db.serialize(create);
db.all("select * from animals", show);

function create() {
    db.run("create table membership (id, password, bmBookName, bmChapter)");
    db.run("insert into membership values ('root','12345', novel-01, chapter50)");
    db.run("insert into membership values ('root','12345', novel-01, chapter30)");
    db.run("insert into membership values ('root','12345', novel-01, chapter20)");
    db.run("insert into membership values ('guest','9876', novel-01, chapter12)");
}

function show(err, rows) {
    if (err) throw err;
    console.log(rows);
}