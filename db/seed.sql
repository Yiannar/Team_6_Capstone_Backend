\c user_profile;

INSERT INTO profile (first_name,last_name, email, password, age, zipCode, pace, gender, verified) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, '11206', '4', 'Female', true ),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, '11106', '2', 'Male', true );

\c login;

INSERT INTO login(email) VALUES
('Janedoe@gmail.com'),
('Johndoe@gmail.com');

INSERT INTO groups (group_name, group_description, group_location, bulletins) VALUES
('Jogging Buddies NYC', 'A group for joggers in New York City', 'New York, NY', '{"bulletin1": "Welcome to Jogging Buddies NYC!", "bulletin2": "Our next group jog is on Saturday at 9am in Central Park. Don''t forget to bring your running shoes!"}'),
('LA Joggers', 'A group for joggers in Los Angeles', 'Los Angeles, CA', '{"bulletin1": "Welcome to LA Joggers!", "bulletin2": "Our next group jog is on Sunday at 8am in Griffith Park. See you there!"}');
