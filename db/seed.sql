\c user_profile;


INSERT INTO groups (title, about, img) VALUES
('Early Morning Run','For the early birds lets meet up at 5am!','https://t3.ftcdn.net/jpg/03/52/54/64/240_F_352546427_SlRYT8y5pnn1NM2ilDM4heFA3oNnIwya.jpg'),
('Brooklyn Joggers','For the Brooklynites that want to run around the borough','https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?cs=srgb&dl=pexels-chris-molloy-944690.jpg&fm=jpg' );


INSERT INTO profile (first_name,last_name, email, password, age, zipCode, pace, gender,verified,img, groups_id) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, 11207, '4', 'Female',true,'https://d39l2hkdp2esp1.cloudfront.net/img/photo/206402/206402_00_2x.jpg', 1),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, 11106, '2', 'Male', true,'https://img.freepik.com/free-photo/side-view-man-jumping-outdoors_23-2149557835.jpg?w=2000', 2 );


INSERT INTO posts(post, date, author_id, groups_id) VALUES
('Hey I am available to meet today', 'March 15th,2023', 1, 1),
('Hey I am not available to meet today', 'March 15th,2023', 2, 2);


INSERT INTO replies(reply, date, post_id, author_id) VALUES
('Hey that sounds great cannot wait to meet up! ', 'March 15th,2023', 1, 1),
('Hey oh no I really wanted to meet up with you', 'March 15th,2023', 2 ,2 )
