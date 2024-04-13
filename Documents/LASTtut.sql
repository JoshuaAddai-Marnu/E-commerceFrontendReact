CREATE TABLE Userlib
( 
    UserID VARCHAR(20),
    Username VARCHAR(50) NOT NULL,
    Useremail VARCHAR(100) NOT NULL UNIQUE,
    UserAddress VARCHAR(255) NOT NULL,
    constraint u_uid_pk PRIMARY KEY (UserID)
)
CREATE TABLE Librarian
(
    StaffID INT(6),
    LibFullName VARCHAR(100) NOT NULL,
    LibAddress VARCHAR(100),
    LibTelNo VARCHAR(100) NOT NULL,
    constraint l_sid_pk PRIMARY KEY(StaffID)
)
--Creating the publisher table (child to the Library)
CREATE TABLE publisher
(
    PubID VARCHAR(6),
    PublName VARCHAR(15) NOT NULL,
    PubAddress VARCHAR(100) NOT NULL,
    PubLincenseNo INT(20) NOT NULL UNIQUE,
    StaffID INT(6),
    constraint p_sid_pk PRIMARY KEY(PubID),
    constraint p_sid_fk FOREIGN KEY(StaffID)
    REFERENCES Librarian(StaffID)
)

--Creating the book table containing three foreign keys
CREATE TABLE Book
(
    ISBN INT(10),
    BookName VARCHAR(120) NOT NULL,
    BookAuthor VARCHAR(100) NOT NULL,
    YearOfPub Date NOT NULL,
    PubID VARCHAR(6) NOT NULL,
    StaffID INT(6) NOT NULL,
    UserID VARCHAR(20),
    constraint b_bisbn_pk PRIMARY KEY(ISBN),
    constraint b_pid_pk FOREIGN KEY(PubID) REFERENCES publisher(PubID),
    constraint b_sid_fk FOREIGN KEY(StaffID) REFERENCES Librarian(StaffID),
    constraint b_uid_fk FOREIGN KEY(UserID) REFERENCES Userlib(UserID)

)

create table Branch
(
Branch_id int(4),
Street_address varchar(15) not NULL,
Postal_code varchar(10) not NULL,
City varchar(10) not null,
State_province varchar(10) not null,
Country varchar(10) not null,
constraint b_bid_pk primary key(Branch_id)
)

create table Job
(
Job_id int(3),
Job_title varchar(15) not null,
Min_salary DECIMAL(8, 2) not null,
Max_salary DECIMAL(8, 2) not null,
constraint j_jid_pk primary key(Job_id)
)

create table Staff
(
Staff_id int(6),
First_name varchar(15) not null,
Last_name varchar(15) not null,
Email varchar(15) not null,
Phone_number int(15) not null,
Hire_date date not null,
Salary decimal(8, 2),
Commission_pct decimal(3, 2),
constraint s_sid_pk primary key(Staff_id) 
constraint s_bid_fk foreign key(Branch_id)REFERENCES Branch (Branch_id)
constraint s_jid_fk foreign key(Job_id) REFERENCES Job(Job_id)
)


--------------------------------------------------------
--1.1.	Create an SQL query to display the last name, job ID, and start date for the employees with the last name of Matos. 
 SELECT  Last_name,Job_id, Hire_date
 FROM Staff
 WHERE Last_name = 'Matos'

 --1.2.	Create an SQL query to display the first name, last name, job ID, and start date for the employees with the last names of Matos and Taylor.
 SELECT First_name,Last_name,Job_id
 FROM Staff
 WHERE Last_name = 'Matos' OR Last_name = 'Taylor'
--Alternatiely
 SELECT First_name,Last_name,Job_id, Hire_date
 FROM Staff
 WHERE Last_name IN ('Matos', 'Taylor')
 


 --1.3.	Create an SQL query to display the last name, job ID, and start date for the employees with the last names of Matos and Taylor. Order the query in ascending order by start date.
 SELECT First_name,Last_name,Job_id, Hire_date
 FROM Staff
 WHERE Last_name = 'Matos' OR Last_name = 'Taylor'
 ORDER BY Hire_date;

--1.4.	Create a query to list the last name, job id, hire date and salary of employees who work in Branch B100.
 SELECT Last_name,Job_id, Hire_date, Salary
 FROM Staff
 WHERE Branch_id = "B100"

 --1.5.	Create a query to display all employee last names in which the third letter of the name is a.
SELECT Last_name
FROM Staff
WHERE Last_name LIKE '__a%';

--1.6.	 Create a query to display the last name of all employees who have both an a and an e in their last name.
SELECT Last_name
FROM Staff
WHERE (Last_name LIKE '%a%') AND (Last_name LIKE '%e%');

--1.7.	Create a query that displays the last name and hire date for all employees who were hired in 2017.
 SELECT Last_name, Hire_date
 FROM Staff
 WHERE Hire_date LIKE '%2017%';

 --Alternatively
 SELECT Last_name, Hire_date
 FROM Staff
 WHERE Hire_date >='2017-01-01' AND Hire_date <='2017-12-31';


--1.8.	Create a query to display the last name, job, and salary for all employees whose job id is 902 or 907 and whose salary is not equal to £33,000 or £34,000.
SELECT Last_name,Job_id, Salary
 FROM Staff
 WHERE Job_id IN (902,907)
 AND Salary NOT IN (33000,34000)

 --Alt
 SELECT Last_name,Job_id, Salary
 FROM Staff
 WHERE (Job_id = 902 OR Job_id = 907)
 AND (Salary <>33000 AND Salary <>34000)


--1.9.	Create a query to list the full name, job id, hire date and salary of employees who work in Branch B100 and who earn more than 50000 .

SELECT First_name, Last_name,Job_id, Hire_date, Salary
 FROM Staff
 WHERE Branch_id = "B100"
 AND Salary > 5000;

 --1.10.	Create a query to list the last name and salary of employees who earn between £30,000 and £40,000.
SELECT Last_name, Salary
 FROM Staff
 WHERE Salary BETWEEN 30000 AND 40000;
 

--1.11.	 Create a query to list the last name and salary of employees who earn between £30,000 and £40,000 and are in branch B200 or B300. 
SELECT Last_name, Salary, Branch_id
 FROM Staff
WHERE (Salary BETWEEN 30000 AND 40000)
AND Branch_id IN ('B200', 'B300')

--1.12.	Create a query to list the last name and salary of employees who earn between £30,000 and £40,000 and are in branch B200 or B300. Label the columns Staff and Monthly Salary, respectively.
SELECT Last_name AS "Staff", Salary AS "Monthly Salary", Branch_id
 FROM Staff
 WHERE (Salary BETWEEN 30000 AND 40000)
 AND Branch_id IN ("B200","B300");
 
--1.13.	 Create a query to list the last name and salary of employees who do not earn between £35,000 and £40,000 and have a job id 902 or 906. Label the columns Staff and Monthly Salary, respectively.
SELECT last_name, Salary, Job_id
FROM Staff
 WHERE Salary NOT BETWEEN 30000 AND 40000
 AND Job_id IN (902,906)

--1.14.	Create a query to list the last name, job id, hire date and salary of employees who work in Branch B200 and earn less than 40000 or  who were hired before the 20th January 2016.
SELECT Last_name, Job_id, Hire_date, Salary, Branch_id
FROM Staff
WHERE Branch_id = "B200"
AND Salary < 40000
OR Hire_date <'2016-01-20'

--1.15.	Create a query to list the last name, job id, hire date and salary of employees who work in Branch B100 and who earn more than 50000 as well as those who work in the same Branch and were hired after the 15th January 2015.
SELECT Last_name, Job_id, Hire_date, Salary, Branch_id
FROM Staff
WHERE Branch_id = "B100"
AND (Salary > 50000
OR Hire_date >'2015-01-15');

