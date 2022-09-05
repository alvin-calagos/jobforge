CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  description varchar(255)
)

ALTER TABLE todo DROP COLUMN description;
INSERT INTO todo (description) VALUES ('FDFD');