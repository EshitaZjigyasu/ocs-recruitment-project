CREATE DATABASE users;
USE users;
CREATE TABLE users_data(
	userid VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    PRIMARY KEY (userid)
);

ALTER TABLE users_data
ADD role VARCHAR(255) NOT NULL;

INSERT INTO users_data()
VALUES ('admin_test', 'cc3a0280e4fc1415930899896574e118', 'admin'),
('basic_test_user','afc285bebb3dd733796cb06db01cd59a','basic'),
('lakshya','cc3a0280e4fc1415930899896574e118','basic'),
('user1','58a821f17a809380190a1c7381ef9dc1','basic'),
('user2','cc3a0280e4fc1415930899896574e118','basic');


SELECT * FROM users_data;