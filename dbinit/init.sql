CREATE DATABASE IF NOT EXISTS satqdb;

USE satqdb;

CREATE TABLE IF NOT EXISTS topic (
    id      BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name    VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id)
);

/* Add sub-topic table */
CREATE TABLE IF NOT EXISTS sub_topic (
    id      BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    topic_id BIGINT UNSIGNED,
    name    VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id, topic_id),
    FOREIGN KEY(topic_id) REFERENCES topic(id)
);

CREATE TABLE IF NOT EXISTS content_metadata (
    id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    topic_id      BIGINT UNSIGNED,
    title         VARCHAR(100) DEFAULT NULL,
    description   VARCHAR(255) DEFAULT NULL,
    content_type  VARCHAR(50) DEFAULT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id, topic_id),
    FOREIGN KEY(topic_id) REFERENCES topic (id)
);

CREATE TABLE IF NOT EXISTS training_image (
    id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    content_id BIGINT UNSIGNED,
    alt_text   VARCHAR(100) DEFAULT NULL,
    file_path  VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id, content_id),
    FOREIGN KEY(content_id) REFERENCES content_metadata (id)
);

CREATE TABLE IF NOT EXISTS training_doc (
    id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    content_id BIGINT UNSIGNED,
    file_path  VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY(id, content_id),
    FOREIGN KEY (content_id) REFERENCES content_metadata (id)
);

CREATE TABLE IF NOT EXISTS training_video (
    id                  BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    content_id          BIGINT UNSIGNED,
    duration_in_seconds BIGINT DEFAULT 0000000000000000300, 
    file_path           VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY(id, content_id),
    FOREIGN KEY (content_id) REFERENCES content_metadata (id)
);

CREATE TABLE IF NOT EXISTS question (
    id       BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    topic_id BIGINT UNSIGNED,
    sub_topic_id BIGINT UNSIGNED,
    content  VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id, topic_id),
    FOREIGN KEY (topic_id) REFERENCES topic (id),
    FOREIGN KEY (sub_topic_id) REFERENCES topic (id),
    CONSTRAINT UQ_Question_Content UNIQUE(content)
);

CREATE TABLE IF NOT EXISTS answer (
    id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    question_id BIGINT UNSIGNED,
    content     VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (id, question_id),
    FOREIGN KEY (question_id) REFERENCES question (id)
);

CREATE TABLE IF NOT EXISTS correct_answer (
    question_id BIGINT UNSIGNED,
    answer_id   BIGINT UNSIGNED,
    FOREIGN KEY (question_id) REFERENCES question(id),
    FOREIGN KEY (answer_id)   REFERENCES answer(id)
);

CREATE TABLE IF NOT EXISTS quiz (
    id         BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    start_time TIMESTAMP DEFAULT NULL,
    end_time   TIMESTAMP DEFAULT NULL,
    complete   BOOLEAN DEFAULT FALSE,
    score      DECIMAL(3,2) DEFAULT 0.00,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS quiz_question (
    quiz_id     BIGINT UNSIGNED,
    question_id BIGINT UNSIGNED,
    FOREIGN KEY (quiz_id) REFERENCES quiz(id),
    FOREIGN KEY (question_id) REFERENCES question(id)
);

CREATE TABLE IF NOT EXISTS department ( 
    id   INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(60) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS user (
    id                BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    department_id     INT UNSIGNED,
    first_name        VARCHAR(35) DEFAULT NULL,
    last_name         VARCHAR(35) DEFAULT NULL,
    email             VARCHAR(255) DEFAULT NULL,
    pass_hash         VARCHAR(255) DEFAULT NULL,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    passed            BOOLEAN DEFAULT FALSE,
    pass_date         TIMESTAMP,
    PRIMARY KEY (id, department_id),
    FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE IF NOT EXISTS response (
    id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id     BIGINT UNSIGNED,
    quiz_id     BIGINT UNSIGNED,
    question_id BIGINT UNSIGNED,
    answer_id   BIGINT UNSIGNED,
    resp_time   TIME,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user (id),
    FOREIGN KEY (quiz_id) REFERENCES quiz (id),
    FOREIGN KEY (question_id) REFERENCES question (id),
    FOREIGN KEY (answer_id) REFERENCES answer (id)
);