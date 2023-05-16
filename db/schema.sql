DROP DATABASE IF EXISTS user_profile;
DROP DATABASE IF EXISTS login;

CREATE DATABASE login;
CREATE DATABASE user_profile; 
CREATE DATABASE registration;
CREATE DATABASE groups;


\c user_profile; 

DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  age INT,
  location TEXT,
  pace TEXT,
  gender TEXT,
  verified BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings(
  rating_id SERIAL PRIMARY KEY,
  route_name VARCHAR(255) NOT NULL,
  profile_id INT NOT NULL,
  rating_value INT NOT NULL,
  location VARCHAR(50) NOT NULL,
  FOREIGN KEY (profile_id) REFERENCES profile (id)
);
