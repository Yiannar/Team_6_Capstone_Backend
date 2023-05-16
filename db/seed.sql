\c user_profile;

INSERT INTO profile (first_name,last_name, email, password, age, zipCode, pace, gender, verified) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, '11206', '4', 'Female', true ),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, '11106', '2', 'Male', true );




\c login;

INSERT INTO login(email)VALUES
('Janedoe@gmail.com')
('Johndoe@gmail.com')


\c posts;

INSERT INTO posts(post, date)
('Hey I am available to meet today', 'March 15th,2023')
('Hey I am not available to meet today', 'March 15th,2023')

\c replies;

INSERT INTO replies(reply, date)
('Hey that sounds great cannot wait to meet up! ', 'March 15th,2023')
('Hey oh no I really wanted to meet up with you', 'March 15th,2023')

