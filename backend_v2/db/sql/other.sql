--Procedures




--Event

CREATE EVENT `Auth Remover` ON SCHEDULE EVERY 1 MINUTE ON COMPLETION NOT PRESERVE ENABLE DO DELETE FROM auth WHERE CURRENT_TIMESTAMP() > auth.date

--Views

-- For listing posts after selecting a thread
CREATE VIEW Post_Preview AS
SELECT p.tid, p.pid, u.user_name, p.title, p.text, p.date FROM Post p JOIN User u USING (user_id) ORDER BY p.date DESC;

--For listing user types
CREATE VIEW UserType_View AS 
SELECT user_id, SUM(TYPE) AS type
FROM(
(SELECT user_id, 1 AS type FROM Author)
UNION
(SELECT user_id, 2 FROM Librarian)
UNION
(SELECT user_id, 0 FROM User)
) AS TEMP
GROUP BY user_id;

--For listing potential friends before adding friend.
CREATE VIEW nonFriend_view as
SELECT u2.user_id, u2.user_name, u2.name, u2.biography, u1.user_id AS check_user FROM User u1, User u2 WHERE NOT EXISTS 
(SELECT 1 FROM friend_of f WHERE f.user_id = u1.user_id AND f.accepted = 1 AND f.friend_id = u2.user_id) AND NOT EXISTS 
(SELECT 1 FROM friend_of f WHERE f.user_id = u2.user_id AND f.accepted = 1 AND f.friend_id = u1.user_id) AND u1.user_id <> u2.user_id
ORDER BY u2.name


--Triggers