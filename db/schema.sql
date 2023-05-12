DROP DATABASE IF EXISTS user_profile;
CREATE DATABASE user_profile; 

\c user_profile; 

-- make table for login  
-- make table for authentication
-- if micorsoft authentication  then verification is verified
DROP TABLE IF EXISTS login;

CREATE TABLE login(
    email TEXT UNIQUE
)

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
  verified BOOLEAN DEFAULT false,
  image TEXT DEFAULT 'no image found'
  
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
