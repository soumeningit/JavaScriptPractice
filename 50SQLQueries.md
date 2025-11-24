# 50 SQL Queries

This file contains 50 commonly asked SQL queries with example solutions. Each question is followed by an example SQL statement. The queries assume a `worker` table (and related tables like `title`, `bonus`, `worker_clone` where used).

---

### Q-1

Write an SQL query to fetch `FIRST_NAME` from `Worker` table using the alias name `WORKER_NAME`.

```sql
SELECT first_name AS WORKER_NAME
FROM worker;
```

### Q-2

Write an SQL query to fetch `FIRST_NAME` from `Worker` table in upper case.

```sql
SELECT UPPER(first_name)
FROM worker;
```

### Q-3

Write an SQL query to fetch unique values of `DEPARTMENT` from `Worker` table.

```sql
SELECT DISTINCT department
FROM worker;
```

### Q-4

Print the first three characters of `FIRST_NAME` from `Worker` table.

```sql
SELECT SUBSTRING(first_name, 1, 3)
FROM worker;
```

### Q-5

Find the position of the alphabet (`B`) in the first name `Amitabh` from `Worker` table.

```sql
SELECT INSTR(first_name, 'B')
FROM worker
WHERE first_name = 'Amitabh';
```

### Q-6

Print the `FIRST_NAME` after removing white spaces from the right side.

```sql
SELECT RTRIM(first_name)
FROM worker;
```

### Q-7

Print the `FIRST_NAME` after removing white spaces from the left side.

```sql
SELECT LTRIM(first_name)
FROM worker;
```

### Q-8

Fetch unique values of `DEPARTMENT` and print their length.

```sql
SELECT DISTINCT department, LENGTH(department)
FROM worker;
```

### Q-9

Print `FIRST_NAME` after replacing `a` with `A`.

```sql
SELECT REPLACE(first_name, 'a', 'A')
FROM worker;
```

### Q-10

Print `FIRST_NAME` and `LAST_NAME` into a single column `COMPLETE_NAME` (space-separated).

```sql
SELECT CONCAT(first_name, ' ', last_name) AS COMPLETE_NAME
FROM worker;
```

### Q-11

Print all `Worker` details ordered by `FIRST_NAME` ascending.

```sql
SELECT *
FROM worker
ORDER BY first_name ASC;
```

### Q-12

Print all `Worker` details ordered by `FIRST_NAME` ascending and `DEPARTMENT` descending.

```sql
SELECT *
FROM worker
ORDER BY first_name ASC, department DESC;
```

### Q-13

Print details for workers with first name `Vipul` or `Satish`.

```sql
SELECT *
FROM worker
WHERE first_name IN ('Vipul', 'Satish');
```

### Q-14

Print details of workers excluding first names `Vipul` and `Satish`.

```sql
SELECT *
FROM worker
WHERE first_name NOT IN ('Vipul', 'Satish');
```

### Q-15

Print details of workers with `DEPARTMENT` starting with `Admin`.

```sql
SELECT *
FROM worker
WHERE department LIKE 'Admin%';
```

### Q-16

Print details of workers whose `FIRST_NAME` contains `a`.

```sql
SELECT *
FROM worker
WHERE first_name LIKE '%a%';
```

### Q-17

Print details of workers whose `FIRST_NAME` ends with `a`.

```sql
SELECT *
FROM worker
WHERE first_name LIKE '%a';
```

### Q-18

Print details of workers whose `FIRST_NAME` ends with `h` and contains six letters.

```sql
SELECT *
FROM worker
WHERE first_name LIKE '_____h';
```

### Q-19

Print details of workers whose `SALARY` lies between `100000` and `500000`.

```sql
SELECT *
FROM worker
WHERE salary BETWEEN 100000 AND 500000;
```

### Q-20

Print details of workers who joined in February 2014.

```sql
SELECT *
FROM worker
WHERE YEAR(joining_date) = 2014
	 AND MONTH(joining_date) = 2;
```

### Q-21

Fetch the count of employees working in the department `Admin`.

```sql
SELECT department, COUNT(*) AS cnt
FROM worker
WHERE department = 'Admin'
GROUP BY department;
```

### Q-22

Fetch worker full names with salaries between `50000` and `100000`.

```sql
SELECT CONCAT(first_name, ' ', last_name) AS full_name
FROM worker
WHERE salary BETWEEN 50000 AND 100000;
```

### Q-23

Fetch the number of workers for each department in descending order.

```sql
SELECT department, COUNT(worker_id) AS no_of_worker
FROM worker
GROUP BY department
ORDER BY no_of_worker DESC;
```

### Q-24

Print details of workers who are also Managers (join with `title`).

```sql
SELECT w.*
FROM worker AS w
INNER JOIN title AS t
	 ON w.worker_id = t.worker_ref_id
WHERE t.worker_title = 'Manager';
```

### Q-25

Fetch titles that appear more than once.

```sql
SELECT worker_title, COUNT(*) AS count
FROM title
GROUP BY worker_title
HAVING COUNT(*) > 1;
```

### Q-26

Show only odd `worker_id` rows.

```sql
SELECT *
FROM worker
WHERE MOD(worker_id, 2) <> 0;
```

### Q-27

Show only even `worker_id` rows.

```sql
SELECT *
FROM worker
WHERE MOD(worker_id, 2) = 0;
```

### Q-28

Clone a new table from another table.

```sql
CREATE TABLE worker_clone LIKE worker;
INSERT INTO worker_clone SELECT * FROM worker;
SELECT * FROM worker_clone;
```

### Q-29

Fetch intersecting records of two tables.

```sql
SELECT worker.*
FROM worker
INNER JOIN worker_clone USING (worker_id);
```

### Q-30

Show records from one table that another table does not have (left join + NULL test).

```sql
SELECT worker.*
FROM worker
LEFT JOIN worker_clone USING (worker_id)
WHERE worker_clone.worker_id IS NULL;
```

### Q-31

Show the current date and time.

```sql
SELECT CURDATE();
SELECT NOW();
```

### Q-32

Show the top 5 records ordered by descending salary.

```sql
SELECT *
FROM worker
ORDER BY salary DESC
LIMIT 5;
```

### Q-33

Determine the 5th highest salary (using LIMIT offset).

```sql
SELECT *
FROM worker
ORDER BY salary DESC
LIMIT 4, 1;
```

### Q-34

Determine the 5th highest salary without using `LIMIT`.

```sql
SELECT salary
FROM worker w1
WHERE 4 = (
	 SELECT COUNT(DISTINCT w2.salary)
	 FROM worker w2
	 WHERE w2.salary >= w1.salary
);
```

### Q-35

Fetch the list of employees with the same salary.

```sql
SELECT w1.*
FROM worker w1
JOIN worker w2
	 ON w1.salary = w2.salary
	AND w1.worker_id <> w2.worker_id;
```

### Q-36

Show the second highest salary using subquery.

```sql
SELECT MAX(salary) AS second_highest
FROM worker
WHERE salary NOT IN (SELECT MAX(salary) FROM worker);
```

### Q-37

Show one row twice in the results (use `UNION ALL`).

```sql
SELECT * FROM worker
UNION ALL
SELECT * FROM worker
ORDER BY worker_id;
```

### Q-38

List `worker_id` who do not get bonus.

```sql
SELECT worker_id
FROM worker
WHERE worker_id NOT IN (SELECT worker_ref_id FROM bonus);
```

### Q-39

Fetch the first 50% records from a table (approximate based on `worker_id` range).

```sql
SELECT *
FROM worker
WHERE worker_id <= (SELECT COUNT(worker_id)/2 FROM worker);
```

### Q-40

Fetch departments that have less than 4 people.

```sql
SELECT department, COUNT(*) AS depCount
FROM worker
GROUP BY department
HAVING depCount < 4;
```

### Q-41

Show all departments along with the number of people in each.

```sql
SELECT department, COUNT(*) AS depCount
FROM worker
GROUP BY department;
```

### Q-42

Show the last record from a table.

```sql
SELECT *
FROM worker
WHERE worker_id = (SELECT MAX(worker_id) FROM worker);
```

### Q-43

Fetch the first row of a table.

```sql
SELECT *
FROM worker
WHERE worker_id = (SELECT MIN(worker_id) FROM worker);
```

### Q-44

Fetch the last five records from a table and order them by `worker_id`.

```sql
(SELECT * FROM worker ORDER BY worker_id DESC LIMIT 5) ORDER BY worker_id;
```

### Q-45

Print the name of employees having the highest salary in each department.

```sql
SELECT w.department, w.first_name, w.salary
FROM (
	 SELECT MAX(salary) AS maxsal, department
	 FROM worker
	 GROUP BY department
) temp
INNER JOIN worker w
	 ON temp.department = w.department
	AND temp.maxsal = w.salary;
```

### Q-46

Fetch three max salaries using a correlated subquery.

```sql
SELECT DISTINCT salary
FROM worker w1
WHERE 3 >= (
	 SELECT COUNT(DISTINCT salary)
	 FROM worker w2
	 WHERE w1.salary <= w2.salary
)
ORDER BY w1.salary DESC;

-- Alternatively: simple approach
SELECT DISTINCT salary FROM worker ORDER BY salary DESC LIMIT 3;
```

### Q-47

Fetch three min salaries using a correlated subquery.

```sql
SELECT DISTINCT salary
FROM worker w1
WHERE 3 >= (
	 SELECT COUNT(DISTINCT salary)
	 FROM worker w2
	 WHERE w1.salary >= w2.salary
)
ORDER BY w1.salary DESC;
```

### Q-48

Fetch nth max salaries using a correlated subquery (replace `n` with desired value).

```sql
SELECT DISTINCT salary
FROM worker w1
WHERE n >= (
	 SELECT COUNT(DISTINCT salary)
	 FROM worker w2
	 WHERE w1.salary <= w2.salary
)
ORDER BY w1.salary DESC;
```

### Q-49

Fetch departments along with the total salaries paid for each of them.

```sql
SELECT department, SUM(salary) AS depSal
FROM worker
GROUP BY department
ORDER BY depSal DESC;
```

### Q-50

Fetch the names of workers who earn the highest salary.

```sql
SELECT first_name, salary
FROM worker
WHERE salary = (SELECT MAX(salary) FROM worker);
```

---

End of 50 SQL Queries.
