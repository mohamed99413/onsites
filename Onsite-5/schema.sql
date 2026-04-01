CREATE TABLE `school_competetion`.`teams` (
    `id` INT NOT NULL AUTO_INCREMENT 
    , `class_name` VARCHAR(50) NOT NULL 
    , `points` INT NOT NULL DEFAULT '0' 
    , `goals_scored` INT NOT NULL DEFAULT '0' 
    , `goals_conceded` INT NOT NULL DEFAULT '0' 
    , PRIMARY KEY (`id`)
    , UNIQUE `Name` (`class_name`)
    ) ENGINE = InnoDB;