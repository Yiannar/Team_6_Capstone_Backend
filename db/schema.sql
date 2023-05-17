DROP DATABASE IF EXISTS user_profile;
CREATE DATABASE user_profile;

\c user_profile; 

-- make table for login  
-- make table for authentication
-- if micorsoft authentication  then verification is verified

DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
   id SERIAL PRIMARY KEY,
   title TEXT NOT NULL,
   about TEXT,
   img TEXT NOT NULL
);

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
  img TEXT DEFAULT 'image not found',
  groups_id INTEGER REFERENCES groups (id)
);



DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post TEXT,
    date TEXT NOT NULL,
    author_id INTEGER REFERENCES profile(id),
   groups_id INTEGER REFERENCES groups(id)
);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies(
    id SERIAL PRIMARY KEY,
    reply TEXT,
    date TEXT NOT NULL,
    post_id INTEGER REFERENCES posts(id),
    author_id INTEGER REFERENCES profile(id)
);
