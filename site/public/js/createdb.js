"use strict";
// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database("../data.db");
// DELETE FROM projects WHERE id = ?
// SELECT * FROM tasks WHERE projectId = ?
var sqlite3 = require("sqlite3").verbose();
// var db = new sql.Database("data.db");
// var x = document.getElementById("Submit");
var id;
var psw;
var nvname;
var idElement;
var pswElement;
const DBSOURCE = "data.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE IF NOT EXISTS Membership (
      	id	TEXT NOT NULL UNIQUE,
      	password	TEXT NOT NULL,
      	PRIMARY KEY(id)
      )`,
      (err) => {
          if (err) {
              // Table already created
          }else{
              // Table just created, creating some rows
              var insert1 = 'INSERT OR IGNORE INTO Membership (id, password) VALUES (?,?)';
              db.run(insert1, ['root', '12345'])
              db.run(insert1, ['guest', '56789'])
          }
      })
        db.run(`CREATE TABLE IF NOT EXISTS Bookmark (
      	id	TEXT NOT NULL,
      	bmBookName	TEXT NOT NULL,
      	bmChapter	TEXT NOT NULL,
      	PRIMARY KEY(id,bmBookName,bmChapter),
        FOREIGN KEY(id) REFERENCES Membership(id)
      )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert1 = 'INSERT OR IGNORE INTO Membership (id, password) VALUES (?,?)';
                var insert2 = 'INSERT OR IGNORE INTO Bookmark (id, bmBookName, bmChapter) VALUES (?,?,?)';
                db.run(insert2, ['root', 'novel-01', 'chapter52'])
                db.run(insert2, ['root', 'novel-01', 'chapter33'])
                db.run(insert2, ['guest', 'novel-01', 'chapter21'])
            }
        });
    }
});

module.exports = db

function login() {
  document.getElementById("form1").submit();
  idElement = document.getElementsById('login-id');
  id = idElement[0].value;
  pswElement = document.getElementsById('login-psw');
  psw = pswElement[0].value;
  alert("ID: " + id + "\nPassword: " + psw);
  document.getElementById("login-id").value = id;
  document.getElementById("login-psw").value = psw;
  db.run(`"INSERT OR REPLACE INTO Membership(id, password) VALUES(?, ?)", [id, psw]`);
}

function saveBm(clicked_id) {
  nvname = document.location.href;
  nvname = nvname.substring(0, (nvname.indexOf("#") == -1) ? nvname.length : nvname.indexOf("#"));
  nvname = nvname.substring(0, (nvname.indexOf("?") == -1) ? nvname.length : nvname.indexOf("?"));
  nvname = nvname.substring(nvname.lastIndexOf("/") + 1, nvname.length);
  db.run(`"INSERT INTO Bookmark(id, bmBookName, bmChapter) VALUES(?, ?, ?)", [id, nvname, clicked_id]`);
  alert("ID: " + id + "\nPassword: " + psw + "\nBook Name: " + nvname + "\nChapter: " + clicked_id);
}
