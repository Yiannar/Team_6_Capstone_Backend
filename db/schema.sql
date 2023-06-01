DROP DATABASE IF EXISTS kyrun;
CREATE DATABASE kyrun;

\c kyrun; 

DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  password TEXT,
  age INT,
  zipCode INTEGER,
  pace TEXT,
  gender TEXT,
  verified BOOLEAN DEFAULT false,
  img TEXT DEFAULT 'image not found',
  bio TEXT
  -- groups_id INTEGER REFERENCES groups (id)
);

DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
   id SERIAL PRIMARY KEY,
   title TEXT NOT NULL,
   about TEXT,
   img TEXT NOT NULL,
   location TEXT
);

DROP TABLE IF EXISTS profile_groups;

CREATE TABLE profile_groups(
  profile_id INTEGER REFERENCES profile(id) ON DELETE CASCADE,
  groups_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
  PRIMARY KEY (profile_id, groups_id)
);

DROP TABLE IF EXISTS posts;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    post TEXT,
    date TEXT NOT NULL,
    author_id INTEGER REFERENCES profile (id),
    groups_id INTEGER REFERENCES groups (id)
);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies(
    id SERIAL PRIMARY KEY,
    reply TEXT,
    date TEXT NOT NULL,
    post_id INTEGER REFERENCES posts (id),
    author_id INTEGER REFERENCES profile (id),
    groups_id INTEGER REFERENCES groups (id)
);


DROP TABLE IF EXISTS bulletin;

CREATE TABLE bulletin (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  author TEXT NOT NULL,
  date TEXT NOT NULL,
  author_id  INTEGER REFERENCES profile (id),
  groups TEXT NOT NULL,
  groups_id INTEGER REFERENCES groups(id)
);
