# SQL Command Types (DDL, DML, DCL, TCL, DQL)

This document summarizes the main SQL command categories, lists common commands in each category, and provides simple MySQL example queries.

---

## 1. DDL — Data Definition Language

- Purpose: Define or modify database structures (tables, indexes, schemas).
- Common commands: `CREATE`, `ALTER`, `DROP`, `TRUNCATE`, `RENAME`

Example (create table):

```sql
CREATE TABLE department (
  dept_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  location VARCHAR(100)
);
```

Example (alter table):

```sql
ALTER TABLE department ADD COLUMN manager_id INT;
```

Example (drop table):

```sql
DROP TABLE department;
```

Example (truncate table):

```sql
TRUNCATE TABLE department;
```

Example (rename table):

```sql
RENAME TABLE department TO dept;
```

---

## 2. DML — Data Manipulation Language

- Purpose: Insert, update, delete, and retrieve data inside tables (runtime data operations).
- Common commands: `INSERT`, `UPDATE`, `DELETE`

Example (insert):

```sql
INSERT INTO department (name, location) VALUES ('Engineering', 'Bengaluru');
```

Example (update):

```sql
UPDATE department SET location = 'Bangalore' WHERE name = 'Engineering';
```

Example (delete):

```sql
DELETE FROM department WHERE dept_id = 10;
```

---

## 3. DQL — Data Query Language

- Purpose: Query or read data from the database.
- Common command: `SELECT`

Example:

```sql
SELECT dept_id, name FROM department WHERE location = 'Bengaluru' ORDER BY name;
```

---

## 4. DCL — Data Control Language

- Purpose: Grant or revoke privileges and control access to the database.
- Common commands: `GRANT`, `REVOKE`

Example (grant privileges):

```sql
GRANT SELECT, INSERT ON mydb.department TO 'report_user'@'localhost';
```

Example (revoke privileges):

```sql
REVOKE INSERT ON mydb.department FROM 'report_user'@'localhost';
```

---

## 5. TCL — Transaction Control Language

- Purpose: Manage transactions — group multiple DML statements into atomic units.
- Common commands: `START TRANSACTION` (or `BEGIN`), `COMMIT`, `ROLLBACK`, `SAVEPOINT`

Example (transaction):

```sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
```

Example (rollback on error):

```sql
START TRANSACTION;
DELETE FROM orders WHERE order_id = 999;
-- something goes wrong
ROLLBACK;
```

---

Notes:

- `SELECT` is part of DQL but is often used alongside DML in real workflows.
- Some SQL dialects group or name categories slightly differently; the above covers the most commonly-used categories and MySQL syntax.

---

If you specifically want this section appended inside `50SQLQueries.md` after line 540, I can try again to patch that file (the editor shows it ends earlier); otherwise you can reference this new `SQL_Command_Types.md` file.
