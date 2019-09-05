CREATE SEQUENCE admin.user_code_seq;

CREATE TABLE admin.user(
    user_code INTEGER PRIMARY KEY DEFAULT nextval('admin.user_code_seq') NOT NULL,
    user_name VARCHAR(30),
    user_pass VARCHAR(30)
);

INSERT INTO admin.user (user_name, user_pass) VALUES ('admin', 'pass'),('guess', 'pass');
