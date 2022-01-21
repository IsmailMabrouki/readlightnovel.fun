BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "membership" (
	"id"	TEXT NOT NULL,
	"password"	TEXT NOT NULL,
	"bmBookName"	TEXT NOT NULL,
	"bmChapter"	TEXT NOT NULL,
	PRIMARY KEY("id","bmBookName","bmChapter")
);
INSERT INTO "membership" ("id","password","bmBookName","bmChapter") VALUES ('root','12345','novel-01','chapter50'),
 ('root','12345','novel-01','chapter30'),
 ('guest','56789','novel-01','chapter20');
COMMIT;
