DROP DATABASE IF EXISTS user_profile;
CREATE DATABASE user_profile; 

\c user_profile; 

-- make table for login  
-- make table for authentication
-- if micorsoft authentication  then verification is verified
DROP TABLE IF EXISTS login;

CREATE TABLE login(
    email TEXT UNIQUE NOT NULL,
    password TEXT UNIQUE NOT NULL
)

DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE NOT NULL,
  password TEXT UNIQUE NOT NULL,
  age INT,
  zipCode INT,
  pace INT,
  gender TEXT,
  verified BOOLEAN DEFAULT false
);

DROP TABLE IF EXISTS bulletin (
  bulletin_id INT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL
  FOREIGN KEY(author) REFERENCES profile (id)
  -- group TEXT NOT NULL,
  FOREIGN KEY(group) REFERENCES group(group_id)
)