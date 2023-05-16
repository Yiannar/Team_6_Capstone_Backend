DROP DATABASE IF EXISTS user_profile;
CREATE DATABASE user_profile; 

\c user_profile; 

-- make table for login  
-- make table for authentication
-- if micorsoft authentication  then verification is verified

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

DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    post_id PRIMARY KEY,
    post TEXT,
    date TEXT NOT NULL,
    FOREGIN KEY(author) REFERENCES profile(id),
    FOREGIN KEY(group) REFERENCES group(group_id)
);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies(
    replies_id PRIMARY KEY,
    reply TEXT,
    date TEXT NOT NULL,
    FOREGIN KEY(post) REFERENCES posts(post_id),
    FOREGIN KEY(author) REFERENCES profile(id),
    FOREGIN KEY(group) REFERENCES group(group_id)
);
