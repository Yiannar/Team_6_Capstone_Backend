\c user_profile;

INSERT INTO profile (first_name,last_name, email, password, age, location, pace, gender, verified) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, 'Brooklyn, NY', '4', 'Female', true ),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, 'Queens, NY', '2', 'Male', true );




\c login;

INSERT INTO login(email)VALUES
('Janedoe@gmail.com')
('Johndoe@gmail.com')