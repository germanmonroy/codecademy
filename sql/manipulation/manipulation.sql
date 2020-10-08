-- Review

-- SQL is a programming language designed to manipulate and manage data stored in relational databases.

-- A relational database is a database that organizes information into one or more tables.
-- A table is a collection of data organized into rows and columns.
-- A statement is a string of characters that the database recognizes as a valid command.

-- CREATE TABLE creates a new table.
-- INSERT INTO adds a new row to a table.
-- SELECT queries data from a table.
-- ALTER TABLE changes an existing table.
-- UPDATE edits a row in a table.
-- DELETE FROM deletes rows from a table.
-- Constraints add information about how a column can be used.

----------------------------

-- Project - Create a Table

CREATE TABLE friends (
    id INTEGER,
    name TEXT,
    birthday DATE
);

-- add Jane Doe to table
INSERT INTO friends (id, name, birthday)
VALUES (1, 'Jane Doe', '1990-05-30');

SELECT * FROM friends;

-- add two friends to table
INSERT INTO friends (id, name, birthday)
VALUES (2, 'BFF One', '1987-08-33');

INSERT INTO friends (id, name, birthday)
VALUES (3, 'BFF Two', '1988-08-31');

-- update Jane Doe's last name
UPDATE friends
SET name = 'Jane Smith'
WHERE id = 1;

-- add new column
ALTER TABLE friends
ADD COLUMN email TEXT;

-- update everyone's email address
UPDATE friends
SET email = 'jane@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'bffone@codecademy.com'
WHERE id = 2;

UPDATE friends
SET email = 'bfftwo@codecademy.com'
WHERE id = 3;

-- remove Jane Smith from friends table
DELETE FROM friends
WHERE id = 1;

-- check final results
SELECT *
FROM friends;