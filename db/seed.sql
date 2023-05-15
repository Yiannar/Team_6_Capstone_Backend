\c user_profile;

INSERT INTO profile (first_name,last_name, email, password, age, zipCode, pace, gender, verified) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, '11206', '4', 'Female', true ),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, '11106', '2', 'Male', true );




\c login;

INSERT INTO login(email)VALUES
('Janedoe@gmail.com')
('Johndoe@gmail.com')