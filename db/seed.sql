\c kyrun;

INSERT INTO profile (first_name,last_name, email, password, age, zipCode, pace, gender,verified,img, bio) VALUES
('Jane', 'Doe', 'Janedoe@gmail.com', 'apple', 23, 11207, '4', 'Female',true,'https://d39l2hkdp2esp1.cloudfront.net/img/photo/206402/206402_00_2x.jpg', `Certified personal trainer and nutrition coach. Dedicated to helping others transform their bodies and lead healthier lives. Let's work together to reach your full fitness potential!`),
('John', 'Doe', 'Johndoe@gmail.com', 'orange', 27, 11106, '2', 'Male', true,'https://img.freepik.com/free-photo/side-view-man-jumping-outdoors_23-2149557835.jpg?w=2000', `Fitness enthusiast passionate about strength training and HIIT workouts. Always pushing my limits to achieve new personal bests. Let's crush those fitness goals together!`),
('Kelly','Livingston','kelly@gmail.com', 'fitnessfreak', 25, 10001,'6','Female',true,'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', `Yoga and mindfulness advocate. Believe in the power of movement and breath to find balance and inner peace. Join me on the mat for a transformative yoga practice!`);
('Jane', 'Smith', 'janesmith@example.com', 'password2', 25, 67890, '8', 'female', true, 'https://hips.hearstapps.com/hmg-prod/images/woman-running-against-wall-royalty-free-image-930134532-1552999674.jpg?crop=0.668xw:1.00xh;0.294xw,0&resize=1200:*', `Outdoor fitness lover. Whether it's hiking, biking, or kayaking, I'm always seeking new adventures. Let's explore the great outdoors and stay fit together!`),
('Michael', 'Johnson', 'michaeljohnson@example.com', 'password3', 35, 54321, '3', 'male', true, 'https://media.istockphoto.com/id/1334140079/photo/male-runner-doing-fitness-workout-athlete-exercising-over-an-orange-background.jpg?s=170667a&w=0&k=20&c=tS1LF86_BDsxSZ_d9IY7h0kIieh1uEr4V9bCJUtH19Y=', `Marathon runner and endurance athlete. Passionate about pushing my limits and conquering long-distance races. Join me in training for your next big race!`),
('Emily', 'Brown', 'emilybrown@example.com', 'password4', 28, 98765, '5', 'female', true, 'https://resize.img.allw.mn/thumbs/ld/xz/j2qlfaen5c768ddbabae7116557968_1080x1080.jpg?width=1200&height=1200', `Dance fitness enthusiast and Zumba instructor. Passionate about grooving to the rhythm while getting fit. Let's dance our way to a healthier and happier lifestyle!`),
('David', 'Taylor', 'davidtaylor@example.com', 'password5', 32, 13579, '7', 'male', true, 'https://www.themanual.com/wp-content/uploads/sites/9/2021/08/gettyimages-1129440598.jpg?fit=800%2C800&p=1', ` Functional training and mobility specialist. Believe in the importance of moving well and staying injury-free. Let's improve our strength, flexibility, and overall performance!`);

INSERT INTO groups (title, about, img) VALUES
('Early Morning Run','For the early birds lets meet up at 5am!','https://t3.ftcdn.net/jpg/03/52/54/64/240_F_352546427_SlRYT8y5pnn1NM2ilDM4heFA3oNnIwya.jpg'),
('Brooklyn Joggers','For the Brooklynites that want to run around the borough','https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?cs=srgb&dl=pexels-chris-molloy-944690.jpg&fm=jpg' ),
('Bronx Running Club', 'A group dedicated to running enthusiasts. Join us for regular group runs and participate in local races.','https://hips.hearstapps.com/hmg-prod/images/group-of-runners-in-a-cross-country-race-royalty-free-image-1653336803.jpg?crop=0.668xw:1.00xh;0.333xw,0&resize=1200:*'),
('Joggers Circle', 'Experience the benefits of Jogging in a supportive and welcoming environment. All levels are welcome.','https://www.verywellfit.com/thmb/obmAncvCUM__VVgHd3Q5ljf5rq4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/multi-ethnic-joggers-running-944241968-5ad0b4243128340036e0e366.jpg');
('Running Club', 'Join our running club and improve your fitness while enjoying the company of fellow runners!', 'https://mapmy.uastatic.com/75cda26295055317ff43b75a70675185.png'),
('Marathon Training Group', 'Get ready for your next marathon with our dedicated training group. Train together, achieve together!', 'https://static01.nyt.com/images/2017/10/17/science/11physed-marathon-photo/11physed-marathon-photo-superJumbo.jpg'),
('Trail Running Enthusiasts', 'Explore natures beauty and challenge yourself with our trail running group. Discover new trails and make lasting memories!', 'https://cdn.5280.com/2021/08/Enchanted_Forest_Sarah_Banks.jpg'),
('Beginners Running Group', 'Are you new to running? Join our beginners group and lets start your running journey together!', 'https://res.cloudinary.com/im2015/image/upload/w_1200,h_1200,c_fill,g_center//blog/running_cover_1.jpg'),
('Social Running Crew', 'Join our fun and social running crew. We focus on enjoying the run and building friendships!', 'https://media.istockphoto.com/id/1153408424/photo/mature-and-senior-people-jogging-at-park.jpg?s=612x612&w=0&k=20&c=LDctDu331B5cyIG8yomVMPuafmo6Uv-3GHP8WHUAJAI=');


INSERT INTO profile_groups (profile_id,groups_id) VALUES
(1,1),(1,3),
(2,2),(2,3),
(3,1),(3,2),(3,3);

INSERT INTO posts(post, date, author_id, groups_id) VALUES
('Hey I am available to meet today', 'March 15th,2023', 1, 1),
('Hey I am not available to meet today', 'March 15th,2023', 2, 2);

INSERT INTO replies(reply, date, post_id, author_id) VALUES
('Hey that sounds great cannot wait to meet up! ', 'March 15th,2023', 1, 1),
('Hey oh no I really wanted to meet up with you', 'March 15th,2023', 2 ,2 );
