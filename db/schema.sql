DROP DATABASE IF EXISTS user_profile;
CREATE DATABASE user_profile; 

\c user_profile; 

DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  age INT,
  zipCode TEXT,
  pace TEXT,
  gender TEXT,
  verified BOOLEAN DEFAULT false,
  image TEXT DEFAULT 'no image found'
  I
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

DROP TABLE IF EXISTS bulletin (
  bulletin_id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  author TEXT NOT NULL,
  FOREIGN KEY(author) REFERENCES profile (id)
)