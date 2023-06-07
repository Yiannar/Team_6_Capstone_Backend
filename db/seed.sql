\c kyrun;

INSERT INTO profile (first_name,last_name, email, password, age, zipCode, pace, gender,verified,img, bio) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, 11207, '4', 'Female',true,'https://d39l2hkdp2esp1.cloudfront.net/img/photo/206402/206402_00_2x.jpg', 'Certified personal trainer and nutrition coach. Dedicated to helping others transform their bodies and lead healthier lives. Lets work together to reach your full fitness potential!'),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, 11106, '2', 'Male', true,'https://img.freepik.com/free-photo/side-view-man-jumping-outdoors_23-2149557835.jpg?w=2000', 'Fitness enthusiast passionate about strength training and HIIT workouts. Always pushing my limits to achieve new personal bests. Lets crush those fitness goals together!'),
('Kelly','Livingston','kelly@gmail.com', 'fitnessfreak', 25, 10001,'6','Female',true,'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 'Yoga and mindfulness advocate. Believe in the power of movement and breath to find balance and inner peace. Join me on the mat for a transformative yoga practice!'), 
('Jane', 'Smith', 'janesmith@example.com', 'password2', 25, 67890, '8', 'female', true, 'https://hips.hearstapps.com/hmg-prod/images/woman-running-against-wall-royalty-free-image-930134532-1552999674.jpg?crop=0.668xw:1.00xh;0.294xw,0&resize=1200:*', 'Outdoor fitness lover. Whether it is hiking, biking, or kayaking, I am always seeking new adventures. Lets explore the great outdoors and stay fit together!'),
('Michael', 'Johnson', 'michaeljohnson@example.com', 'password3', 35, 54321, '3', 'male', true, 'https://media.istockphoto.com/id/1334140079/photo/male-runner-doing-fitness-workout-athlete-exercising-over-an-orange-background.jpg?s=170667a&w=0&k=20&c=tS1LF86_BDsxSZ_d9IY7h0kIieh1uEr4V9bCJUtH19Y=', 'Marathon runner and endurance athlete. Passionate about pushing my limits and conquering long-distance races. Join me in training for your next big race!'),
('Emily', 'Brown', 'emilybrown@example.com', 'password4', 28, 98765, '5', 'female', true, 'https://resize.img.allw.mn/thumbs/ld/xz/j2qlfaen5c768ddbabae7116557968_1080x1080.jpg?width=1200&height=1200', 'Dance fitness enthusiast and Zumba instructor. Passionate about grooving to the rhythm while getting fit. Lets dance our way to a healthier and happier lifestyle!'),
('David', 'Taylor', 'davidtaylor@example.com', 'password5', 32, 13579, '7', 'male', true, 'https://www.themanual.com/wp-content/uploads/sites/9/2021/08/gettyimages-1129440598.jpg?fit=800%2C800&p=1', ' Functional training and mobility specialist. Believe in the importance of moving well and staying injury-free. Let us improve our strength, flexibility, and overall performance!'),
('Ryan','Davis', 'ryandavis@example.com', 'password6', 21, 10021, '5','male', true, 'https://img.freepik.com/premium-photo/profile-picture-well-built-athletic-female-runner-sportswear-training-isolated-along-gray-wall_171337-28948.jpg?w=2000', 'I love fitness and meeting new people I am inspiring to be a fitness trainer');


INSERT INTO groups (title, about, img, location) VALUES
('Early Morning Run','For the early birds lets meet up at 5am!','https://t3.ftcdn.net/jpg/03/52/54/64/240_F_352546427_SlRYT8y5pnn1NM2ilDM4heFA3oNnIwya.jpg','Queens'),
('Brooklyn Joggers','For the Brooklynites that want to run around the borough','https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?cs=srgb&dl=pexels-chris-molloy-944690.jpg&fm=jpg', 'Brooklyn'),
('Bronx Running Club', 'A group dedicated to running enthusiasts. Join us for regular group runs and participate in local races.','https://hips.hearstapps.com/hmg-prod/images/group-of-runners-in-a-cross-country-race-royalty-free-image-1653336803.jpg?crop=0.668xw:1.00xh;0.333xw,0&resize=1200:*','Bronx'),
('Joggers Circle', 'Experience the benefits of Jogging in a supportive and welcoming environment. All levels are welcome.','https://www.verywellfit.com/thmb/obmAncvCUM__VVgHd3Q5ljf5rq4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/multi-ethnic-joggers-running-944241968-5ad0b4243128340036e0e366.jpg','Manhattan'),
('Running Club', 'Join our running club and improve your fitness while enjoying the company of fellow runners!', 'https://mapmy.uastatic.com/75cda26295055317ff43b75a70675185.png', 'Staten Island'),
('Marathon Training Group', 'Get ready for your next marathon with our dedicated training group. Train together, achieve together!', 'https://static01.nyt.com/images/2017/10/17/science/11physed-marathon-photo/11physed-marathon-photo-superJumbo.jpg', 'Brooklyn'),
('Trail Running Enthusiasts', 'Explore natures beauty and challenge yourself with our trail running group. Discover new trails and make lasting memories!', 'https://cdn.5280.com/2021/08/Enchanted_Forest_Sarah_Banks.jpg', 'Queens'),
('Beginners Running Group', 'Are you new to running? Join our beginners group and lets start your running journey together!', 'https://res.cloudinary.com/im2015/image/upload/w_1200,h_1200,c_fill,g_center//blog/running_cover_1.jpg','Bronx'),
(' High Vibrational Running Group', 'Are you looking for a peaceful run? Join our beginners group and lets start your running journey together!', 'https://res.cloudinary.com/im2015/image/upload/w_1200,h_1200,c_fill,g_center//blog/running_cover_1.jpg','Staten Island'),
('Social Running Crew', 'Join our fun and social running crew. We focus on enjoying the run and building friendships!', 'https://media.istockphoto.com/id/1153408424/photo/mature-and-senior-people-jogging-at-park.jpg?s=612x612&w=0&k=20&c=LDctDu331B5cyIG8yomVMPuafmo6Uv-3GHP8WHUAJAI=', 'Manhattan');



INSERT INTO profile_groups (profile_id,groups_id) VALUES
(1,1),(1,3),(1,2),
(2,2),(2,3),(2,1),
(3,1),(3,2),(3,3),
(4,4),(4,3),(4,2),(4,1),
(5,5),(5,4),(5,3),(5,2), (5,1),
(6,6),(6,5),(6,4),(6,3),(6,2),(6,1),
(7,7),(7,6),(7,5),(7,4),(7,3),(7,2),(7,1),(7,10),(7,9), 
(8,9),(8,8),(8,6),(8,5),(8,10),(8,7);


INSERT INTO posts(post, date, author_id, groups_id) VALUES
('Hey I am available to meet today', 'March 15th,2023', 1, 1),
('Wow, John! Your HIIT workouts always leave me breathless. Keep up the amazing work!', 'March 15th,2023', 2, 2),
('Just finished an intense HIIT workout! Feeling the burn and loving every minute of it. Who is up for a challenge?',' 2023-05-15', 3, 3 ),
('Excited to announce a new 12-week transformation program! Lets achieve amazing results together. DM me if you are interested!',' 2023-05-18', 4,4),
('Had an incredible yoga retreat over the weekend. Feeling rejuvenated and centered. Grateful for the power of yoga in my life.','2023-05-20', 5,5),
('Just conquered a challenging mountain biking trail. The adrenaline rush was unreal! Who is up for some outdoor adventures?','2023-05-22',6,6),
('Finished a long training run today. Training for the upcoming marathon is tough but rewarding. Keep pushing, everyone!',' 2023-05-24',7,7),
('Focusing on mobility and flexibility training today. It is crucial for injury prevention and overall performance. Take care of your body!','2023-05-25', 8,8);



INSERT INTO replies(reply, date, post_id, author_id, groups_id) VALUES
('Hey that sounds great cannot wait to meet up! ', 'March 15th,2023', 1, 1, 1),
('Hey oh no I really wanted to meet up with you', 'March 15th,2023', 2 ,2, 2),
('I have always wanted to try running, Kelly! Count me in for your next session. Looking forward to it!','2023-05-16', 3,3, 3),
('You are an inspiration, Jane! I am also training for the marathon. Lets motivate each other along the way!',' 2023-05-21', 4,4,4),
('Count me in, Michael! I am ready to make some serious changes and take my fitness to the next level.',' 2023-05-25', 5,5,5),
('Great job, David! Your dedication is inspiring. I am ready to take on that challenge!',' 2023-05-24', 7,7,7),
('Jane, I can relate to the struggle of marathon training. It is tough, but the sense of accomplishment is worth it. Lets keep pushing and inspiring each other!','2023-05-25', 6,6,6),
('You are absolutely right, Ryan! I have been neglecting mobility. Lets share some tips on improving flexibility and staying injury-free.',' 2023-05-22', 8,8,8);

INSERT INTO bulletin(title, message, author, date , author_id,groups, groups_id) VALUES
('Early Moring Running', 'Hey everyone lets meet at 5am today!','Jane Doe', '2023-05-22', 1, 'Early Morning Run', 1),
('Brooklyn Joggers', 'Brooklyn Group Meetings ', 'John Doe','2023-05-22', 2, 'First run at Brooklyn Bridge Park', 2),
('Bronx Running Club', 'Running through out the Bronx ','Kelly Livingston' ,'2023-05-23', 3, 'Running for all levels', 3),
('Joggers Circle', 'Jogging for you', 'Jane Smith','2023-05-23', 4, 'find a buddy and start jogging', 4),
('Running Club', 'Jogging for you', 'Michael Johnson','2023-05-23', 5, 'find a buddy and start jogging', 5),
('Marathon Training Group', 'Jogging for you', 'Emily Brown','2023-05-23', 6, 'find a buddy and start jogging', 6),
('Trail Running Enthusiasts', 'Jogging for you', 'David Taylor','2023-05-23', 7, 'find a buddy and start jogging', 7),
('Beginners Running Group', 'Jogging for you', 'Ryan Davis','2023-05-24', 8, 'find a buddy and start jogging', 8),
('High Vibrational Running Group', 'Running for your virbration ', 'Ryan Davis','2023-05-24', 8, 'Running to help improve your aura and mental health', 9),
('Social Running Crew', 'Pick a topic and start running', 'David Taylor', '2023-05-24', 7, 'find a buddy and talk about your favorite topic', 10);

INSERT INTO running_routes (title, description, distance,location) VALUES
('Central Park Loop', 'Enjoy a scenic run through Central Park.', 3.5, 'Manhattan'),
('Prospect Park Loop', 'Run amidst the beauty of Prospect Park.', 2.8, 'Brooklyn'),
('Flushing Meadows Corona Park', 'Explore Flushing Meadows Corona Park while getting your run in.', 4.2, 'Queens'),
('Van Cortlandt Park', 'Experience nature in Van Cortlandt Park.', 5.0,  'Bronx'),
('South Beach Boardwalk', 'Enjoy a run along the beautiful South Beach Boardwalk.', 2.5,'StatenIsland');

