DROP TABLE IF EXISTS cat_form CASCADE;

-- CREATE TABLE posts(
--     id SERIAL PRIMARY KEY NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     content TEXT,
--     user_id INTEGER REFERENCES users(id)
-- );

CREATE TABLE cat_form (

    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  
    description TEXT,
    image TEXT,
    cat_name VARCHAR(255),
    gender VARCHAR(255),
    last_seen_date DATE NOT NULL,
    last_seen_address VARCHAR(255) NOT NULL,
    last_seen_city VARCHAR(255) NOT NULL,
    last_seen_postal_code VARCHAR(255) NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW(),
    status VARCHAR(355 NOT NULL)

); 