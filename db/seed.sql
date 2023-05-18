\c user_profile;

INSERT INTO profile (first_name,last_name, email, password, age, zipCode, pace, gender,verified,img) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, 11207, '4', 'Female',true,'https://d39l2hkdp2esp1.cloudfront.net/img/photo/206402/206402_00_2x.jpg'),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, 11106, '2', 'Male', true,'https://img.freepik.com/free-photo/side-view-man-jumping-outdoors_23-2149557835.jpg?w=2000'),
('Kelly','Livingston','kelly@gmail.com', 'fitnessfreak', 25, 10001,'6','Female',true,'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

INSERT INTO groups (title, about, img) VALUES
('Early Morning Run','For the early birds lets meet up at 5am!','https://t3.ftcdn.net/jpg/03/52/54/64/240_F_352546427_SlRYT8y5pnn1NM2ilDM4heFA3oNnIwya.jpg'),
('Brooklyn Joggers','For the Brooklynites that want to run around the borough','https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?cs=srgb&dl=pexels-chris-molloy-944690.jpg&fm=jpg' ),
('Bronx Running Club', 'A group dedicated to running enthusiasts. Join us for regular group runs and participate in local races.','https://hips.hearstapps.com/hmg-prod/images/group-of-runners-in-a-cross-country-race-royalty-free-image-1653336803.jpg?crop=0.668xw:1.00xh;0.333xw,0&resize=1200:*'),
('Joggers Circle', 'Experience the benefits of Jogging in a supportive and welcoming environment. All levels are welcome.','https://www.verywellfit.com/thmb/obmAncvCUM__VVgHd3Q5ljf5rq4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/multi-ethnic-joggers-running-944241968-5ad0b4243128340036e0e366.jpg');

INSERT INTO profile_groups (profile_id,group_id) VALUES
(1,1),(1,3),
(2,2),(2,3),
(3,1),(3,2),(3,3);

INSERT INTO posts(post, date, author_id, groups_id) VALUES
('Hey I am available to meet today', 'March 15th,2023', 1, 1),
('Hey I am not available to meet today', 'March 15th,2023', 2, 2);

INSERT INTO replies(reply, date, post_id, author_id) VALUES
('Hey that sounds great cannot wait to meet up! ', 'March 15th,2023', 1, 1),
('Hey oh no I really wanted to meet up with you', 'March 15th,2023', 2 ,2 )
