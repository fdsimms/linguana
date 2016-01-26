# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null, indexed
session_token   | string    | not null, indexed, unique
bio             | text      | not null
name            | string    | not null
hometown        | string    | not null
email           | string    | not null, unique
points          | integer   | not null, default: 0
streak_length   | integer   | not null, default: 0
image_url       | integer   |



## languages    
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | integer   | not null
flag_img_url | string    |
abbreviation | string    | not null

## courses
column name        | data type | details
-------------------|-----------|-----------------------
id                 | integer   | not null, primary key
speaker_language_id| integer   | not null, foreign key (references languages), indexed
subject_language_id| integer   | not null, foreign key (references languages), indexed
name               | string    | not null

## skills
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
course_id     | integer   | not null, foreign key (references courses), indexed
name          | string    | not null, unique

## lessons
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
skill_id      | integer   | not null, foreign key (references skills), indexed
title         | string    | not null
tips_and_notes| text      | 

## multiple choice questions
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
lesson_id     | integer   | not null, foreign key (references lessons), indexed
body          | string    | not null

## answer choices
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
question_id      | integer   | not null, foreign key (references multiple choice questions), indexed
is_correct       | boolean   | not null, default: false

## selected answers
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
user_id          | integer   | not null, foreign key (references users), indexed
answer_choice_id | integer   | not null, foreign key (references answer choices), indexed

## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
author_id       | integer   | not null, foreign key (references users), indexed
commentable_id  | integer   | not null, foreign key for polymorphic assoc., indexed
commentable_type| string    | not null, type for polymorphic assoc.
content         | text      | not null
parent_id       | integer   | self-referential foreign key, indexed

