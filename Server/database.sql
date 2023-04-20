use dbmsproject_final;

select * from timetable;
select * from room;
select * from faculty;
select * from student;
select * from enrolled;

show tables;
desc timetable;
desc room;
desc faculty;
desc student;
desc enrolled;

create table timetable(
Sno integer ,
room_no varchar(10) references room(room_id),
sem varchar(5),
branch varchar(10),
course_name varchar(15),
fid varchar(10) references faculty(fid),
day varchar(10),
time varchar(10),
primary key (Sno) );

create table room(
Sno int primary key ,
room_no varchar(10),
floor int);

create table faculty(
fid varchar(10) primary key,
fname varchar(30) ,
f_email varchar(30),
f_pwd varchar(100));

create table student(
sid varchar(10) primary key,
sname varchar(15),
sem varchar(5),
branch varchar(10),
s_email varchar(20),
s_pwd varchar(100));

CREATE TABLE enrolled (
  eid INT PRIMARY KEY,
  Sno INT,
  sid varchar(10),
  FOREIGN KEY (Sno) REFERENCES timetable(Sno),
  FOREIGN KEY (sid) REFERENCES student(sid)
);

insert into enrolled values (1, 1, "21BCP107");
insert into enrolled values (2, 3, "21BCP110");
insert into enrolled values (3, 6, "21BCP140");
insert into enrolled values (4, 16, "21BCP122");
insert into enrolled values (5, 10, "21BCP116");
insert into enrolled values (6, 1, "21BCP080");
insert into enrolled values (7, 13, "21BCP103");
insert into enrolled values (8, 19, "21BCP100");
insert into enrolled values (9, 8, "21BCP133");
insert into enrolled values (10, 7, "21BCP134");
insert into enrolled values (11, 19, "21BCP137");

insert into timetable values (1,"F-503",4,"CSE","Com Skills","140","MON","9-11 AM");
insert into timetable values (2,"F-503",4,"CSE","DAA","149","MON","11-12 AM");
insert into timetable values (3,"F-404",4,"CSE","OS","210","MON","2-3 PM");

insert into timetable values (4,"F-404",4,"CSE","DBMS","150","TUE","9-10 AM");
insert into timetable values (5,"F-404",4,"CSE","OS","210","TUE","10-11 AM");
insert into timetable values (6,"F-402",4,"CSE","CDC","149","TUE","11-12 AM");
insert into timetable values (7,"F-404",4,"CSE","DAA","149","TUE","2-3 PM");

insert into timetable values (8,"F-503",4,"CSE","DBMS","150","WED","9-10 AM");
insert into timetable values (9,"F-202",4,"CSE","DP LAB","170","WED","3-4 PM");
insert into timetable values (10,"E-215",4,"CSE","DAA LAB","169","WED","2-4 AM");

insert into timetable values (11,"F-402",4,"CSE","TOC","169","THU","11-12 AM");
insert into timetable values (12,"F-403",4,"CSE","OS","210","THU","2-3 PM");
insert into timetable values (13,"F-403",4,"CSE","DBMS","150","THU","3-4 PM");
insert into timetable values (14,"F-203",4,"CSE","OS LAB","180","THU","4-6 PM");

insert into timetable values (15,"F-202",4,"CSE","DBMS LAB","200","FRI","9-11 AM");
insert into timetable values (16,"F-402",4,"CSE","TOC","169","FRI","11-12 AM");
insert into timetable values (17,"F-404",4,"CSE","DAA","149","FRI","2-3 PM");
insert into timetable values (18,"F-404",4,"CSE","TOC","169","FRI","3-4 PM");
insert into timetable values (19,"F-202",4,"CSE","DP LAB","170","FRI","4-6 PM");

insert into room values(1,"F-503",5);
insert into room values(2,"F-404",4);
insert into room values(4,"F-202",2);
insert into room values(5,"F-402",4);
insert into room values(6,"F-403",4);
insert into room values(7,"F-203",2);
insert into room values(8,"F-202",2);
insert into room values(9,"E-215",2);


insert into faculty values ("211","Arvind Kumar","Arvind4@gmail.com","$2a$10$.W06s6b9lj1XetvkLINUUO0j4ISevihkKoGXEagrGdYfIUV12xeOK");
insert into faculty values ("230","Amit Kumar","Amit1@gmail.com","$2a$10$1D5XaFxMjNQVWAr0rpNU4.sOleHnedeq4xPy.v/MzUaO.zlHZltci");
insert into faculty values ("212","BV Budhdev","Budhdev0@gmail.com","$2a$10$QegvOMlyw4LR4tfS94WN7u58kjG2CKW08KeascWrpzSEx2oWr1UTS");
insert into faculty values ("220","Hiren Thakkar Sharma","Hiren123@gmail.com","$2a$10$GJnGRrmXeMN5FX6Vwa2iaOZ.VtTohY11E7xV6D.ctfTZV7Jafx0/a");
insert into faculty values ("235","Rajeev Gupta","Rajeev48@gmail.com","$2a$10$XzBVm2p0TccxAL5nAe5I/.wXAIMteNbSIyeiOPAGIousmHyR0XSrC");
insert into faculty values ("240","Shakti Mishra","Shakti6@gmail.com","$2a$10$C/q2JMG5Af4uqa5kniZE/eYqmG2.vog.ampwc593dMbcqwGvd99/S");
insert into faculty values ("280","Samir Patel","Samir40@gmail.com","$2a$10$IDaPXTH9./AxtdE0qSIf1e3l7hyvzyHVBVfyB6KtgisWAGsw5CYL.");
insert into faculty values ("290","Sonam Nahar","Sonam33@gmail.com","$2a$10$CzINWnCN1FFVnIfvB9mUPe2W5Foqlxl7Cre3DX.B2FXHcUHRFGUwS");
insert into faculty values ("281","Vineet","Vineet020@gmail.com","$2a$10$o0Txy5xd6ldiYPco9DdKy.MbAXENvQBifGmuFngF/ZyoG8RSSMykq");
insert into faculty values ("200","Amitava Choudhury","amitava1@gmail.com","$2a$11$j2JtMCZX7fxWN9OTFaPNEuhp4dP1cplWDJvHsX5/g00QNkg3Wgp1q");
insert into faculty values ("210","Rutvij Jhaveri","rutvij2@gmail.com","$2a$11$fZNgGm4WXi03Az4Yoom3A.zsuD9OzYWPQGqawEh4P3.Cnn4Ho4o0i");
insert into faculty values ("149","Rajendra Choudhury","rajendra3@gmail.com","$2a$11$LFPtJWnkwn7jYMumPpr0OuATykGn9nRguyqiZqvTTvSgOWZcRY/xq");
insert into faculty values ("140","Dhvani Pandya","Dhvani02@gmail.com","$2a$11$fNQ58nU2i5v2oaB59S/9COUaMxy5p1.yC1PCaY/aegAj4SdYHr7U6");
insert into faculty values ("150","Hargeet Kaur","Hargeet10@gmail.com","$2a$11$/rXl94f0UO.Mw1yfROmvQuWg3MR9GUE.daooCt0QRem5POOGARVCa");
insert into faculty values ("169","Santosh Bharti","Santosh45@gmail.com","$2a$11$kLqxHK9hKhsXN8.qZcjA/.RabN0kDcfyvczyeTlKNbGo4gu/UvMYq");
insert into faculty values ("170","Vipul Mishra","Vipul435@gmail.com","$2a$11$a5hwmLvJc0oCpOKyxqASWO8T3aK7BsVIP3HE0eCEFOdZ6f8ez1d12");
insert into faculty values ("179","Debabrata Swain","Debabrata0@gmail.com","$2a$11$kkrzFJLGi3eHb5HDvdpBduu5mLRSEQFNIa3Fl/LmR6pct8LwD0suC");
insert into faculty values ("180","Kapil Sharma","Kapil4@gmail.com","$2a$11$.GQBhfQUTlQzbhh6UfKkf.DAWOxpD4jCkDNz4oIdk2SU94u0HvTTq");



insert into timetable values (20,"F-402",6,"CSE","AI","235","MON","9-10 AM");
insert into timetable values (21,"F-402",6,"CSE","Cloud Computing","212","MON","10-12 AM");
insert into timetable values (22,"F-402",4,"CSE","DBMS","290","MON","2-3 PM");
insert into timetable values (23,"F-402",4,"CSE","TOC","169","MON","3-4 PM");

insert into timetable values (24,"F-402",6,"CSE","Com Skills-3","211","TUE","9-11 AM");
insert into timetable values (25,"F-402",4,"CSE","CDC","281","TUE","2-3 PM");
insert into timetable values (26,"F-402",4,"CSE","OS","220","TUE","3-5 PM");

insert into timetable values (27,"F-402",6,"CSE","Big Data","280","WED","9-10 AM");
insert into timetable values (28,"F-402",6,"CSE","Cloud Computing","240","WED","10-11 AM");
insert into timetable values (29,"F-402",6,"CSE","Big Data","280","WED","11-12 AM");
insert into timetable values (30,"F-402",4,"ICT","Logisim","230","WED","12-01 PM");

insert into timetable values (31,"F-402",6,"CSE","Big Data","280","THU","9-10 AM");
insert into timetable values (32,"F-402",4,"ICT","Logisim","230","THU","12-01 PM");
insert into timetable values (33,"F-402",6,"CSE","CDC","281","THU","4-5 PM");

insert into timetable values (34,"F-402",4,"CSE","CDC","281","FRI","9-10 AM");
insert into timetable values (35,"F-402",6,"CSE","Big Data","280","FRI","11-12 AM");
insert into timetable values (36,"F-402",4,"ICT","Logisim","230","FRI","12-01 PM");
insert into timetable values (37,"F-402",6,"CSE","Cloud Computing","240","FRI","4-5 AM");
insert into timetable values (38,"F-402",6,"CSE","AI","180","FRI","5-6 AM");

INSERT INTO student (sid, sname, sem, branch, s_email, s_pwd)
VALUES
('21BCP080', 'Arpit', '4', 'CSE', 'arpit@gmail.com', '$2a$11$ERbqrwNun2r5Gm6FjkhXw.4Hq9wNWV52/8q/Rl09Yo8LYC8mS7/OW'),
('21BCP100', 'Kunal', '4', 'CSE', 'kunal@gmail.com', '$2a$11$JtVVrjPZtGJ5slk/DHaIreG42qkh8Dt.N7ednXlXS7YVoQL84vHXC'),
('21BCP103', 'Dev', '4', 'CSE', 'dev@gmail.com', '$2a$11$RpgeCkQSbKBV6szK8Gp1POvy9uYgHwedCoP0EE.8amD62vpuVKbJW'),
('21BCP107', 'Murli', '4', 'CSE', 'murli@gmail.com', '$2a$11$x3a1V6JZ0VtidT12a2FYeOZ.tAFmoRJ/iz6F.0ynaxQPZpCBuQazK'),
('21BCP110', 'Shruti', '4', 'CSE', 'shruti@gmail.com', '$2a$11$GSjX/FfLbBdEQSsSPiojUeRjNCSzTYvmnEjW81W9.WcRACtBncy6q'),
('21BCP116', 'Dhvani', '4', 'CSE', 'dhvani@gmail.com', '$2a$11$0q2NP/cD2b5Z.wpQChnl4.mUrb6DZ8N9WwOE0IK1GhEbt8t/o2/iO'),
('21BCP122', 'Harshit', '4', 'CSE', 'harshit@gmail.com', '$2a$11$QV49PNoUlZd83louX0PTh.MDnKWHUBOHsdgmaeP4lVzJgM/JfsBRG'),
('21BCP133', 'Niv', '4', 'CSE', 'niv@gmail.com', '$2a$11$szjemZlQeFWPE37ZGATtEOGexxkbkwMozvy9wL5eJyIJTVbHKgNza'),
('21BCP134', 'Abhinav', '4', 'CSE', 'abhi@gmail.com', '$2a$11$oS03AFyBW/y4PcaBApZX6uqpcSvohnBdiN/U2Xgh4AYFucqwjBJiq'),
('21BCP137', 'Dhruv', '4', 'CSE', 'dhruv@gmail.com', '$2a$11$k8s.ws4MStUkzU7uwqIY1umJ0F7EEX3ANHjsw9opMb.Jnhzzlyl1e');

