CREATE TABLE IF NOT EXISTS User (
  user_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(32) NOT NULL,
  email varchar(32) NULL UNIQUE,
  name varchar(32) NOT NULL,
  biography varchar(255) DEFAULT NULL,
  password varchar(32) NOT NULL,
  PRIMARY KEY (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;