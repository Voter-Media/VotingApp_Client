-- Insert dummy users
INSERT INTO USER(
  firstName,
  lastName,
  username,
  password,
  phone,
  email,
  year_level,
  faculty,
  gender,
  role,
  verified
)
VALUES(
'John',
'Doe',
'johndoe',
'password123',
9876543210,
'john@example.com',
'Senior',
'Engineering',
'Male',
'Voter'TRUE
),
(
'Jane',
'Smith',
'janesmith',
'password123',
9876543211,
'jane@example.com',
'Junior',
'Science',
'Female',
'Voter'TRUE
),
(
'Alice',
'Johnson',
'alicejohnson',
'password123',
9876543212,
'alice@example.com',
'Senior',
'Arts',
'Female',
'Candidate'TRUE
),
(
'Bob',
'Brown',
'bobbrown',
'password123',
9876543213,
'bob@example.com',
'Junior',
'Engineering',
'Male',
'Candidate'TRUE
);
-- Insert dummy logins
INSERT INTO login(
username,
login_time,
user_id
)
VALUES(
'johndoe',
'2024-08-09 09:00:00',
1
),
(
'janesmith',
'2024-08-09 09:05:00',
2
),
(
'alicejohnson',
'2024-08-09 09:10:00',
3
),
(
'bobbrown',
'2024-08-09 09:15:00',
4
);
-- Insert dummy candidates
INSERT INTO candidate(
POSITION,
img,
party,
user_id
)
VALUES(
'President',
'image1.jpg',
'Party A',
3
),
(
'Vice President',
'image2.jpg',
'Party B',
4
);
-- Insert dummy voters
INSERT INTO voter(
voted,
user_id
)
VALUES(
FALSE,
1
),
(
FALSE,
2
);
-- Insert dummy votes
INSERT INTO vote(
candidate_idDATE,
voter_id
)
VALUES(
1,
'2024-08-09 10:00:00',
1
),
(
2,
'2024-08-09 10:05:00',
2
);
