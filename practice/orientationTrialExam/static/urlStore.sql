SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `urlStore` (
 `id` int NOT NULL AUTO_INCREMENT,
 `url` varchar(200) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `alias` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `hitCount` int NOT NULL DEFAULT 0,
 `secretCode` int NOT NULL DEFAULT 0,
 PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `urlStore` (`url`, `alias`, `secretCode`) VALUES ('www.index.hu', 'index', 9999);