DROP DATABASE IF EXISTS stanford;
CREATE DATABASE stanford;

USE stanford;


-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'teachers'
-- 
-- ---

DROP TABLE IF EXISTS `teachers`;
    
CREATE TABLE `teachers` (
  `id` INTEGER AUTO_INCREMENT ,
  `name` VARCHAR(40),
  `image_url` VARCHAR(100),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'students'
-- 
-- ---

DROP TABLE IF EXISTS `students`;
    
CREATE TABLE `students` (
  `id` INTEGER AUTO_INCREMENT,
  `name` VARCHAR(40),
  `image_url` VARCHAR(100),
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'classes'
-- 
-- ---

DROP TABLE IF EXISTS `classes`;
    
CREATE TABLE `classes` (
  `id` INTEGER AUTO_INCREMENT,
  `teacher_id` INTEGER,
  `days` VARCHAR(5),
  `time` VARCHAR(10),
  `department` VARCHAR(20),
  `code` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'students_classes'
-- 
-- ---

DROP TABLE IF EXISTS `students_classes`;
    
CREATE TABLE `students_classes` (
  `id` INTEGER AUTO_INCREMENT,
  `student_id` INTEGER,
  `class_id` INTEGER,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `classes` ADD FOREIGN KEY (teacher_id) REFERENCES `teachers` (`id`);
ALTER TABLE `students_classes` ADD FOREIGN KEY (student_id) REFERENCES `students` (`id`);
ALTER TABLE `students_classes` ADD FOREIGN KEY (class_id) REFERENCES `classes` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `teachers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `classes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `students_classes` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO `teachers` (`name`) VALUES
('Johnson');

INSERT INTO `teachers` (`name`) VALUES
('Donaldson');

INSERT INTO `teachers` (`name`) VALUES
('Kerry');

INSERT INTO `teachers` (`name`) VALUES
('Hill');

INSERT INTO `students` (`name`) VALUES
('Williams');

INSERT INTO `students` (`name`) VALUES
('Howard');

INSERT INTO `students` (`name`) VALUES
('Shaw');

INSERT INTO `students` (`name`) VALUES
('Gonzalez');

INSERT INTO `students` (`name`) VALUES
('Chen');

INSERT INTO `students` (`name`) VALUES
('Jenkins');

INSERT INTO `students` (`name`) VALUES
('McDonald');

INSERT INTO `classes` (`teacher_id`,`days`,`time`, `department`, `code`) VALUES
('1','MWF','9-10AM', 'Mathematics', 201);

INSERT INTO `classes` (`teacher_id`,`days`,`time`, `department`, `code`) VALUES
('2','TTh','12-1PM', 'History', 300);

INSERT INTO `classes` (`teacher_id`,`days`,`time`, `department`, `code`) VALUES
('3','TTh','1-2PM', 'Sociology', 100);

INSERT INTO `classes` (`teacher_id`,`days`,`time`, `department`, `code`) VALUES
('4','MW','12-2PM', 'Computer Science', 301);

INSERT INTO `classes` (`teacher_id`,`days`,`time`, `department`, `code`) VALUES
('1','MTWTh','4-5PM', 'Basket Weaving', 283);


INSERT INTO `students_classes` (`student_id`,`class_id`) VALUES
('1','1');

INSERT INTO `students_classes` (`student_id`,`class_id`) VALUES
('1','2');

INSERT INTO `students_classes` (`student_id`,`class_id`) VALUES
('3','1');

INSERT INTO `students_classes` (`student_id`,`class_id`) VALUES
('2','2');

