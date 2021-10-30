DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password VARCHAR(250),
    first_name VARCHAR(50),
   your_kids INTEGER,
   their_kids INTEGER,
    favorite_food VARCHAR(250),
    embarrassing_moment VARCHAR(500),
    gender VARCHAR(25),
    photo TEXT,
    preference_id INTEGER REFERENCES preferences(id)
)

DROP TABLE IF EXISTS preferences;

CREATE TABLE preferences (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    their_kids INTEGER,
    gender_preferred VARCHAR(25)
)

DROP TABLE IF EXISTS matches;

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    matched_user INTEGER REFERENCES users(user_id)
)



-- I created users and preferences in your DB.  I didn't see them in there