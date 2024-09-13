-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dailyexpenseapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dailyexpenseapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dailyexpenseapp` DEFAULT CHARACTER SET utf8 ;
USE `dailyexpenseapp` ;

-- -----------------------------------------------------
-- Table `dailyexpenseapp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dailyexpenseapp`.`users` (
  `id` BINARY(16) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(225) NOT NULL,
  `confirmed` TINYINT NULL DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `Username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `dailyexpenseapp`.`owners`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dailyexpenseapp`.`owners` (
  `id` BINARY(16) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `middle_name` VARCHAR(50) NOT NULL,
  `lastname` VARCHAR(50) NOT NULL,
  `phone` INT(11) UNSIGNED NOT NULL,
  `birthday` DATE NOT NULL,
  `address` VARCHAR(200) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dailyexpenseapp`.`accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dailyexpenseapp`.`accounts` (
  `id` BINARY(16) NOT NULL,
  `account_number` VARCHAR(25) NOT NULL,
  `owner_id` BINARY(16) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bank` VARCHAR(50) NOT NULL,
  `initial_amount` DECIMAL(10, 6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `account_number_UNIQUE` (`account_number` ASC) VISIBLE,
  INDEX `fk_accounts_owners1_idx` (`owner_id` ASC) VISIBLE,
  CONSTRAINT `fk_accounts_owners1`
    FOREIGN KEY (`owner_id`)
    REFERENCES `dailyexpenseapp`.`owners` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `dailyexpenseapp`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dailyexpenseapp`.`roles` (
  `id` BINARY(16) NOT NULL,
  `name` VARCHAR(20) NOT NULL,
  `description` VARCHAR(100) NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `dailyexpenseapp`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dailyexpenseapp`.`bill` (
  `id` BINARY(16) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `amount` DECIMAL(10, 6) NOT NULL,
  `type_transaction` ENUM('expense', 'deposit') NOT NULL,
  `type_charge` ENUM('card', 'cash', 'bank_check', 'transfer') NOT NULL,
  `comments` VARCHAR(255) NULL,
  `account_id` BINARY(16) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_transactions_accounts1_idx` (`account_id` ASC) VISIBLE,
  CONSTRAINT `fk_transactions_accounts1`
    FOREIGN KEY (`account_id`)
    REFERENCES `dailyexpenseapp`.`accounts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `dailyexpenseapp`.`totals_by_weeks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dailyexpenseapp`.`totals_by_weeks` (
  `id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `week_number` TINYINT(52) UNSIGNED NOT NULL,
  `month` TINYINT(12) NULL,
  `year` SMALLINT UNSIGNED NOT NULL,
  `total_week` DECIMAL(10,6) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `year_UNIQUE` (`year` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


-- -----------------------------------------------------
-- Table `dailyexpenseapp`.`users_has_roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dailyexpenseapp`.`users_has_roles` (
  `id` BINARY(16) NOT NULL,
  `users_id` BINARY(16) NOT NULL,
  `roles_id` BINARY(16) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `users_id`, `roles_id`),
  INDEX `fk_users_has_roles_roles1_idx` (`roles_id` ASC) VISIBLE,
  INDEX `fk_users_has_roles_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_roles_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `dailyexpenseapp`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_roles_roles1`
    FOREIGN KEY (`roles_id`)
    REFERENCES `dailyexpenseapp`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
