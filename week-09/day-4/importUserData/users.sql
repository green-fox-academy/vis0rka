SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

CREATE TABLE IF NOT EXISTS `author` (
 `aut_id` varchar(8) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `aut_name` varchar(50) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `country` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 `home_city` varchar(25) COLLATE latin1_general_ci NOT NULL DEFAULT '',
 PRIMARY KEY (`aut_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;