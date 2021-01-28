USE studentmanagementdb;
INSERT INTO
  Schools (name, rating, createdAt, updatedAt)
VALUES
  (
    'University of Washington',
    95,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
  );
USE studentmanagementdb;
INSERT INTO
  teachers (
    firstName,
    lastName,
    degree,
    rating,
    department,
    yearsTeaching,
    officeHours,
    officeLocation,
    publications,
    createdAt,
    updatedAt,
    SchoolId
  )
VALUES
  (
    'Anthony',
    'Brown',
    'Full-Stack Development',
    100,
    'Computer Science',
    3,
    10.00,
    'Seattle',
    'How to write a REACT App',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    1
  );
INSERT INTO
  Classes (
    name,
    location,
    createdAt,
    updatedAt,
    TeacherId
  )
VALUES
  (
    'Full Stack Bootcamp',
    'Seattle',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    1
  );
INSERT INTO
  TeacherStudents (
    createdAt,
    updatedAt,
    StudentId,
    TeacherId
  )
VALUES
  (
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    1,
    1
  );