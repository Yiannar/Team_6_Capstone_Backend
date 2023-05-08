DROP DATABASE IF EXISTS user_profile;
CREATE DATABASE user_profile;

\c user_profile;

DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
  user_id INT PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  age INT,
  location TEXT,
  pace TEXT,
  gender TEXT,
  verified BOOLEAN DEFAULT false,
);