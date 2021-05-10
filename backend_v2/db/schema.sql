
CREATE TABLE IF NOT EXISTS User (
  user_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(32) NOT NULL,
  email varchar(32) NULL UNIQUE,
  name varchar(32) NOT NULL,
  biography varchar(255) DEFAULT NULL,
  password varchar(32) NOT NULL,
  PRIMARY KEY (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS auth (
  date DATETIME NOT NULL,
  token varchar(32) NOT NULL,
  PRIMARY KEY (token)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS friend_of(
  user_id INT,
  FOREIGN KEY(user_id) REFERENCES User(user_id) ON DELETE CASCADE,
  friend_id INT,
  FOREIGN KEY(friend_id) REFERENCES User(user_id) ON DELETE CASCADE,
  accepted BIT DEFAULT 0,
  CONSTRAINT PK_Person PRIMARY KEY (user_id,friend_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

