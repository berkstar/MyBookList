
CREATE TABLE IF NOT EXISTS User (
  user_id int NOT NULL AUTO_INCREMENT,
  user_name varchar(32) NOT NULL UNIQUE,
  email varchar(32) NOT NULL UNIQUE,
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

CREATE TABLE IF NOT EXISTS Librarian(
  user_id INT PRIMARY KEY,
  FOREIGN KEY(user_id) REFERENCES User(user_id) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS Author(
  user_id INT PRIMARY KEY,
  FOREIGN KEY(user_id) REFERENCES User(user_id) ON DELETE CASCADE,
  is_verified BIT DEFAULT 0,
  verfier_id INT NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE publishes(
  author_id INT,
  FOREIGN KEY(author_id) REFERENCES Author(user_id) ON DELETE CASCADE,
  book_id INT,
  FOREIGN KEY(book_id) REFERENCES Book(book_id) ON DELETE CASCADE,
  CONSTRAINT PK_Publishes PRIMARY KEY (author_id,book_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
