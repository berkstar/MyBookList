CREATE TABLE IF NOT EXISTS student (
  user_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(32) NOT NULL,
  email varchar(32) NULL,
  name varchar(32) NOT NULL,
  biography varchar(255) DEFAULT NULL,
  password varchar(32) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE KEY (email, user_name)
);

CREATE TABLE IF NOT EXISTS auth (
  date DATE NOT NULL,
  token varchar(32) NOT NULL,
  PRIMARY KEY (token)
);