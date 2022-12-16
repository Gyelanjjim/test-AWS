-- migrate:up
CREATE TABLE users
(
    id INT NOT NULL AUTO_INCREMENT,                        
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

-- migrate:down
DROP TABLE users;
