/* USERS */
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('dhoeger', 'allison.nader@example.net', 'Edwin Hauck', 'Maiores vitae omnis et enim quibusdam libero omnis. Debitis non dignissimos saepe distinctio ipsa voluptatem. Id est vel aperiam nulla tempore labore quas.', '586f68429b85816734acbc80775cbad6');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('alubowitz', 'gus.hilll@example.net', 'Claudie Boyle', 'Facere minima totam ex dolorem ipsa. Qui quasi odit ipsam ratione dolorem facere quis.', '52edc4e11c164ae89036de42b666c7b4');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('orutherford', 'johan06@example.net', 'Pearl Schowalter MD', 'Ab a nihil expedita eum at laudantium iure. Quia et cupiditate excepturi et aut quo alias. Quis placeat alias voluptates nemo cupiditate et quas.', 'a9fa62e8f3c61eadb3ba98aee9e040dd');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('mueller.destin', 'abdullah.dibbert@example.net', 'Jesse Schiller', 'Nihil eius natus repellendus sequi iste eius accusantium expedita. Iusto ipsam officia et voluptatem distinctio corporis. Dolore enim praesentium ratione corporis id.', '431abdc033e5f2241d25fab4247d70c3');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('kovacek.ryan', 'jovani.hahn@example.com', 'Mr. Helmer Lubowitz I', 'Pariatur ut corrupti blanditiis eligendi ducimus quo magni. Itaque suscipit sit quam. Libero similique tempore quia molestiae. Ut ut repudiandae necessitatibus quasi molestias quod.', '0d80f54d4e72033452802678b4f7d1ea');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('gerardo03', 'santina.lebsack@example.net', 'Bart Harvey', 'Ab eum recusandae facere aut occaecati et eum quia. Aperiam iure dolor nihil. Iure sunt neque molestiae at cumque. Dolorem harum natus magni perspiciatis aperiam corporis facere amet. Sapiente officiis necessitatibus omnis enim ratione rerum.', '7ed8f880305470c47aca2065b7ccbabf');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('dlesch', 'wsanford@example.com', 'Fannie Bednar', 'Laborum ut maxime et doloribus iste. Repellat tempore incidunt repellendus nesciunt corporis omnis. Nobis nihil consequatur quia eos qui numquam. Dolor accusantium facere vel reiciendis velit molestias aperiam.', '5b0e587be8895b5e57a667140827789b');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ( 'mabel.mosciski', 'kasey.miller@example.com', 'Pearline Goldner V', 'Quae voluptas numquam pariatur reiciendis et qui. Qui quis vero ut et itaque. Aut deleniti vel explicabo eum maxime assumenda reiciendis. Architecto eum labore voluptate sunt minima dolores molestiae.', '876f0b39616e38b82490e0f516fcf083');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('newton.lehner', 'akihn@example.net', 'Marc Rath', 'Qui repudiandae ut cum qui at beatae. Suscipit minus est ratione sunt velit harum. In tempore pariatur sequi officia ratione.', 'b7547188265fa71a3ca89fbd76fc87f6');
INSERT IGNORE INTO `User` (`user_name`, `email`, `name`, `biography`, `password`) VALUES ('vlarson', 'kassandra.dickens@example.net', 'Prof. Ulices Reichel', 'Ducimus sint beatae facere dolor ea ab occaecati. Magnam assumenda quis rerum suscipit rem repellendus. Et quos consequatur aliquam adipisci eos.', 'a5dbd065a32e9a22de39ab4dc57835ed');


/*Thread*/
INSERT IGNORE INTO Thread (name, context) VALUES ("Science Fiction", "Sci-fi is among the most popular book genre there is. With movie adaptations like Star Wars and Hitchhiker’s Guide to the Galaxy, this genre has exploded and is abundant in the book world.");
INSERT IGNORE INTO Thread (name, context) VALUES ("Adventure","Writing a novel in the adventure category will require a trip, journey, or quest of some kind as the overall plot.");
INSERT IGNORE INTO Thread (name, context) VALUES ("Fantasy","Fantasy encompasses a huge part of the book world. It’s one of the most popular book genres out there—a personal favorite of mine to read and write.");
INSERT IGNORE INTO Thread (name, context) VALUES ("Science","Sci-fi is among the most popular book genre there is. With movie adaptations like Star Wars and Hitchhiker’s Guide to the Galaxy, this genre has exploded and is abundant in the book world.");
INSERT IGNORE INTO Thread (name, context) VALUES ("Education","Writing a novel in the adventure category will require a trip, journey, or quest of some kind as the overall plot.");
INSERT IGNORE INTO Thread (name, context) VALUES ("Romance","Fantasy encompasses a huge part of the book world. It’s one of the most popular book genres out there—a personal favorite of mine to read and write.");
/*Posts*/

INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (1, 6, 9, 13, 'Laudantium ex deserunt aut necessitatibus enim tempora blanditii', 'Voluptatibus officiis facilis dolorum ea inventore. Porro aut ut magni ipsum ab neque. Temporibus cum tempora suscipit modi atque qui et.', '1995-02-21 09:34:29');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (2, 4, 8, 73, 'Est illum voluptatem beatae.', 'Non est non officiis. Aliquam expedita quo et ducimus mollitia minima. In aut voluptatem nemo voluptas ut nisi.', '2006-05-17 13:27:27');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (3, 4, 1, 86, 'Libero laudantium et quod sit quidem ex.', 'Illum laborum aut nam rem. Assumenda est aut doloremque quia. Hic vel eveniet nisi cupiditate sequi corporis libero.', '1995-01-06 00:33:12');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (4, 2, 2, 71, 'Delectus libero praesentium ut aut.', 'Dolor architecto eum qui aliquid. Minima quasi laborum omnis officiis. Temporibus eaque animi aut et libero et.', '1978-12-05 23:10:06');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (5, 5, 10, 6, 'Iste dignissimos possimus et.', 'Incidunt occaecati minus occaecati illum ea necessitatibus quidem. Sit quia adipisci assumenda consequuntur. Fugiat esse quia magni et.', '1981-11-25 15:40:35');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (6, 1, 8, 1, 'Et perspiciatis quia ad possimus.', 'Debitis eaque beatae magni occaecati. Et natus ut voluptas vero autem modi maxime. Cum consectetur voluptatum facere sed molestias.', '1998-01-10 09:35:37');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (7, 5, 9, 25, 'Exercitationem reprehenderit quibusdam ex dolores voluptatem sim', 'Consequatur aut sunt voluptatem. Ut inventore aut expedita nihil rerum est molestias. Iusto qui totam aut. Voluptatem dicta asperiores sed eum et autem placeat nulla.', '1981-02-18 09:15:26');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (8, 1, 7, 36, 'Animi velit aut aut rerum et voluptas consequatur quos.', 'Placeat non nobis recusandae eos. Magnam maiores earum nam. Tempore ipsam rerum dolores eos. Et nulla excepturi doloremque.', '1986-05-14 22:13:06');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (9, 1, 6, 44, 'Enim incidunt ducimus consequatur dicta.', 'Nesciunt dolores eos quis laboriosam ratione. Esse exercitationem quas aut unde. Consectetur non iusto repellendus minima. Optio inventore maxime voluptatibus iusto autem eligendi alias.', '1974-05-02 03:58:50');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (10, 4, 2, 41, 'Laudantium nam sunt magnam porro praesentium.', 'Ullam ut sit asperiores id. Omnis rem soluta dolorum quibusdam aliquam iste vitae. Eum sint porro soluta libero. Commodi facere cumque unde quae sequi in saepe eveniet.', '2015-07-12 22:22:44');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (11, 5, 9, 17, 'Dolore itaque dolores accusantium dolores.', 'Voluptatem voluptas veritatis non assumenda nisi totam. Recusandae tenetur quas eum aut consectetur ut aut. Voluptas et atque voluptate et et cupiditate.', '1980-09-24 06:46:33');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (12, 1, 5, 80, 'Ab asperiores suscipit esse sed est sequi.', 'Qui earum vero dolorem. Consequuntur excepturi ut fugiat repellat modi. Laborum qui eligendi unde id facilis reprehenderit ea qui. Incidunt ea eius animi laudantium.', '1997-05-31 04:49:25');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (13, 6, 6, 7, 'Incidunt et mollitia laudantium earum illum.', 'Expedita dolorem repellendus rerum neque quisquam autem. Omnis ea aut est quia deleniti incidunt est. Recusandae nulla nostrum aliquid veniam modi ut. Labore ad sunt ab vel voluptatem.', '1970-03-02 17:54:55');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (14, 4, 4, 20, 'Mollitia aliquam blanditiis labore vero accusantium qui maiores ', 'Similique laboriosam sed libero dicta rerum facilis beatae. Ipsa ipsam ut similique et.', '1999-10-09 03:56:48');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (15, 5, 1, 0, 'Mollitia dicta itaque eum culpa laudantium voluptatem iste.', 'Iste neque ea iste. Corrupti iste nobis ut aut a est. Ipsum eaque voluptatem voluptatum dolorum hic.', '2019-11-04 00:29:33');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (16, 1, 8, 10, 'Sunt ab assumenda officiis voluptas.', 'Recusandae earum minus pariatur eius praesentium. Dolor et nisi doloribus cupiditate. Vel ad error accusantium ab. Deserunt amet eos officiis facilis consequatur.', '2016-09-29 09:46:24');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (17, 6, 7, 90, 'Sed quisquam vero magni vitae sed.', 'Ducimus labore minima enim corrupti delectus molestiae voluptas. Tempore voluptatem harum molestiae dolores sunt. Ipsam laboriosam ut quia voluptate sapiente.', '1982-01-18 10:15:47');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (18, 3, 5, 91, 'Saepe placeat sunt ut labore ut.', 'Commodi sunt consequatur assumenda excepturi. Quasi voluptas non rerum consequatur voluptas. Velit ratione id aut unde quod.', '2020-03-29 01:40:21');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (19, 5, 8, 3, 'Quasi illo reprehenderit autem omnis.', 'Pariatur ut quae blanditiis sit culpa. Et enim non quis.', '1980-12-18 18:15:01');
INSERT IGNORE INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (20, 4, 6, 47, 'Culpa ut temporibus officia et beatae.', 'Ut eos quos nam. Doloremque et aut quia qui non modi ipsum. Corrupti ab beatae quo optio beatae commodi. Deserunt deleniti fugiat nulla praesentium.', '1997-12-01 01:10:45');

/*friend_of*/

INSERT IGNORE INTO `friend_of` VALUES (8, 10, b'1');
INSERT IGNORE INTO `friend_of` VALUES (10, 2, b'1');
INSERT IGNORE INTO `friend_of` VALUES (7, 6, b'0');
INSERT IGNORE INTO `friend_of` VALUES (6, 5, b'1');
INSERT IGNORE INTO `friend_of` VALUES (5, 9, b'0');
INSERT IGNORE INTO `friend_of` VALUES (3, 6, b'0');
INSERT IGNORE INTO `friend_of` VALUES (4, 7, b'1');

/*Comment*/
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (1, 9, 'Sunt voluptas odit rerum. Nisi inventore aut est. Soluta illo sit natus.', '1973-09-11 10:15:35');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (2, 6, 'Laborum modi dolore velit sit omnis. Culpa odio quo excepturi et.', '1973-01-27 16:02:53');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (3, 4, 'In enim ad quo dolorem. Est vitae ut amet ex accusamus sed amet. Ut et et et blanditiis.', '2014-05-16 15:44:26');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (4, 3, 'Ad voluptas id dolorem cumque enim. Magnam perspiciatis voluptate quia recusandae.', '2007-03-29 06:56:02');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (5, 1, 'Et optio asperiores quos omnis ab. Et nostrum et minus non ut. Ut quos ea dolor deleniti qui sint.', '1996-01-11 12:12:11');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (6, 9, 'Doloremque ut facere quae labore ullam. Quis sint impedit totam tempora enim laborum suscipit ut.', '2008-04-29 13:58:47');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (7, 10, 'Ab consequatur et velit similique corrupti. Vel dolorem temporibus sint. Natus a vero et labore.', '2003-06-21 19:53:41');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (8, 6, 'Sit fugit et et et tenetur tempore ad. Quia aut aut eos.', '2014-12-31 04:57:34');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (9, 5, 'Suscipit est provident autem quasi. Quibusdam ad sed voluptatem soluta.', '1988-05-27 02:36:30');
INSERT INTO `Comment` (`cid`, `user_id`, `text`, `date`) VALUES (10, 5, 'Quae at ullam eum corporis quisquam incidunt. Laborum modi neque id pariatur occaecati et adipisci.', '2019-06-24 07:16:23');

/*Post*/

INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (1, 6, 9, 13, 'Laudantium ex deserunt aut necessitatibus enim tempora blanditii', 'Voluptatibus officiis facilis dolorum ea inventore. Porro aut ut magni ipsum ab neque. Temporibus cum tempora suscipit modi atque qui et.', '1995-02-21 09:34:29');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (2, 4, 8, 73, 'Est illum voluptatem beatae.', 'Non est non officiis. Aliquam expedita quo et ducimus mollitia minima. In aut voluptatem nemo voluptas ut nisi.', '2006-05-17 13:27:27');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (3, 4, 1, 86, 'Libero laudantium et quod sit quidem ex.', 'Illum laborum aut nam rem. Assumenda est aut doloremque quia. Hic vel eveniet nisi cupiditate sequi corporis libero.', '1995-01-06 00:33:12');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (4, 2, 2, 71, 'Delectus libero praesentium ut aut.', 'Dolor architecto eum qui aliquid. Minima quasi laborum omnis officiis. Temporibus eaque animi aut et libero et.', '1978-12-05 23:10:06');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (5, 5, 10, 6, 'Iste dignissimos possimus et.', 'Incidunt occaecati minus occaecati illum ea necessitatibus quidem. Sit quia adipisci assumenda consequuntur. Fugiat esse quia magni et.', '1981-11-25 15:40:35');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (6, 1, 8, 1, 'Et perspiciatis quia ad possimus.', 'Debitis eaque beatae magni occaecati. Et natus ut voluptas vero autem modi maxime. Cum consectetur voluptatum facere sed molestias.', '1998-01-10 09:35:37');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (7, 5, 9, 25, 'Exercitationem reprehenderit quibusdam ex dolores voluptatem sim', 'Consequatur aut sunt voluptatem. Ut inventore aut expedita nihil rerum est molestias. Iusto qui totam aut. Voluptatem dicta asperiores sed eum et autem placeat nulla.', '1981-02-18 09:15:26');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (8, 1, 7, 36, 'Animi velit aut aut rerum et voluptas consequatur quos.', 'Placeat non nobis recusandae eos. Magnam maiores earum nam. Tempore ipsam rerum dolores eos. Et nulla excepturi doloremque.', '1986-05-14 22:13:06');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (9, 1, 6, 44, 'Enim incidunt ducimus consequatur dicta.', 'Nesciunt dolores eos quis laboriosam ratione. Esse exercitationem quas aut unde. Consectetur non iusto repellendus minima. Optio inventore maxime voluptatibus iusto autem eligendi alias.', '1974-05-02 03:58:50');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (10, 4, 2, 41, 'Laudantium nam sunt magnam porro praesentium.', 'Ullam ut sit asperiores id. Omnis rem soluta dolorum quibusdam aliquam iste vitae. Eum sint porro soluta libero. Commodi facere cumque unde quae sequi in saepe eveniet.', '2015-07-12 22:22:44');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (11, 5, 9, 17, 'Dolore itaque dolores accusantium dolores.', 'Voluptatem voluptas veritatis non assumenda nisi totam. Recusandae tenetur quas eum aut consectetur ut aut. Voluptas et atque voluptate et et cupiditate.', '1980-09-24 06:46:33');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (12, 1, 5, 80, 'Ab asperiores suscipit esse sed est sequi.', 'Qui earum vero dolorem. Consequuntur excepturi ut fugiat repellat modi. Laborum qui eligendi unde id facilis reprehenderit ea qui. Incidunt ea eius animi laudantium.', '1997-05-31 04:49:25');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (13, 6, 6, 7, 'Incidunt et mollitia laudantium earum illum.', 'Expedita dolorem repellendus rerum neque quisquam autem. Omnis ea aut est quia deleniti incidunt est. Recusandae nulla nostrum aliquid veniam modi ut. Labore ad sunt ab vel voluptatem.', '1970-03-02 17:54:55');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (14, 4, 4, 20, 'Mollitia aliquam blanditiis labore vero accusantium qui maiores ', 'Similique laboriosam sed libero dicta rerum facilis beatae. Ipsa ipsam ut similique et.', '1999-10-09 03:56:48');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (15, 5, 1, 0, 'Mollitia dicta itaque eum culpa laudantium voluptatem iste.', 'Iste neque ea iste. Corrupti iste nobis ut aut a est. Ipsum eaque voluptatem voluptatum dolorum hic.', '2019-11-04 00:29:33');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (16, 1, 8, 10, 'Sunt ab assumenda officiis voluptas.', 'Recusandae earum minus pariatur eius praesentium. Dolor et nisi doloribus cupiditate. Vel ad error accusantium ab. Deserunt amet eos officiis facilis consequatur.', '2016-09-29 09:46:24');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (17, 6, 7, 90, 'Sed quisquam vero magni vitae sed.', 'Ducimus labore minima enim corrupti delectus molestiae voluptas. Tempore voluptatem harum molestiae dolores sunt. Ipsam laboriosam ut quia voluptate sapiente.', '1982-01-18 10:15:47');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (18, 3, 5, 91, 'Saepe placeat sunt ut labore ut.', 'Commodi sunt consequatur assumenda excepturi. Quasi voluptas non rerum consequatur voluptas. Velit ratione id aut unde quod.', '2020-03-29 01:40:21');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (19, 5, 8, 3, 'Quasi illo reprehenderit autem omnis.', 'Pariatur ut quae blanditiis sit culpa. Et enim non quis.', '1980-12-18 18:15:01');
INSERT INTO `Post` (`pid`, `tid`, `user_id`, `like_count`, `title`, `text`, `date`) VALUES (20, 4, 6, 47, 'Culpa ut temporibus officia et beatae.', 'Ut eos quos nam. Doloremque et aut quia qui non modi ipsum. Corrupti ab beatae quo optio beatae commodi. Deserunt deleniti fugiat nulla praesentium.', '1997-12-01 01:10:45');

/*post_comment */

INSERT INTO `post_comment` (`cid`, `pid`) VALUES (4, 1);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (1, 5);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (6, 6);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (3, 9);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (5, 11);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (10, 11);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (8, 15);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (2, 16);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (7, 19);
INSERT INTO `post_comment` (`cid`, `pid`) VALUES (9, 19);



