# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160205020818) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answer_choices", force: :cascade do |t|
    t.integer  "exercise_id",                 null: false
    t.string   "body",                        null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "is_correct",  default: false, null: false
  end

  add_index "answer_choices", ["created_at"], name: "index_answer_choices_on_created_at", using: :btree
  add_index "answer_choices", ["exercise_id", "body"], name: "index_answer_choices_on_exercise_id_and_body", unique: true, using: :btree
  add_index "answer_choices", ["exercise_id"], name: "index_answer_choices_on_exercise_id", using: :btree
  add_index "answer_choices", ["updated_at"], name: "index_answer_choices_on_updated_at", using: :btree

  create_table "completions", force: :cascade do |t|
    t.integer  "user_id",          null: false
    t.integer  "completable_id",   null: false
    t.string   "completable_type", null: false
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "completions", ["completable_id"], name: "index_completions_on_completable_id", using: :btree
  add_index "completions", ["completable_type"], name: "index_completions_on_completable_type", using: :btree
  add_index "completions", ["user_id", "completable_id"], name: "index_completions_on_user_id_and_completable_id", unique: true, using: :btree
  add_index "completions", ["user_id"], name: "index_completions_on_user_id", using: :btree

  create_table "course_enrollments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "course_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "course_enrollments", ["course_id", "user_id"], name: "index_course_enrollments_on_course_id_and_user_id", unique: true, using: :btree
  add_index "course_enrollments", ["course_id"], name: "index_course_enrollments_on_course_id", using: :btree
  add_index "course_enrollments", ["user_id"], name: "index_course_enrollments_on_user_id", using: :btree

  create_table "courses", force: :cascade do |t|
    t.string   "name",               null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "known_language_id",  null: false
    t.integer  "target_language_id", null: false
  end

  add_index "courses", ["target_language_id", "known_language_id"], name: "index_courses_on_target_language_id_and_known_language_id", unique: true, using: :btree

  create_table "exercises", force: :cascade do |t|
    t.integer  "lesson_id",          null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "exercise_type",      null: false
    t.string   "thing_to_translate", null: false
  end

  add_index "exercises", ["lesson_id"], name: "index_exercises_on_lesson_id", using: :btree

  create_table "languages", force: :cascade do |t|
    t.string   "name",              null: false
    t.string   "abbreviation",      null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "flag_file_name"
    t.string   "flag_content_type"
    t.integer  "flag_file_size"
    t.datetime "flag_updated_at"
  end

  add_index "languages", ["name"], name: "index_languages_on_name", using: :btree

  create_table "lessons", force: :cascade do |t|
    t.integer  "skill_id",   null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "lessons", ["name"], name: "index_lessons_on_name", using: :btree
  add_index "lessons", ["skill_id"], name: "index_lessons_on_skill_id", using: :btree

  create_table "skills", force: :cascade do |t|
    t.integer  "course_id",      null: false
    t.string   "name",           null: false
    t.text     "tips_and_notes"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "skills", ["course_id"], name: "index_skills_on_course_id", using: :btree
  add_index "skills", ["name"], name: "index_skills_on_name", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                             null: false
    t.string   "password_digest",                      null: false
    t.string   "session_token",                        null: false
    t.text     "bio"
    t.string   "hometown"
    t.string   "email",                                null: false
    t.integer  "points",                   default: 0, null: false
    t.integer  "streak_length",            default: 0, null: false
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
    t.integer  "current_language_id"
    t.integer  "current_course_id"
    t.string   "fname",                                null: false
    t.string   "lname"
    t.string   "provider"
    t.string   "uid"
    t.string   "profile_pic_file_name"
    t.string   "profile_pic_content_type"
    t.integer  "profile_pic_file_size"
    t.datetime "profile_pic_updated_at"
  end

  add_index "users", ["password_digest"], name: "index_users_on_password_digest", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

  create_table "word_debuts", force: :cascade do |t|
    t.integer  "lesson_id",  null: false
    t.integer  "word_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "word_debuts", ["lesson_id"], name: "index_word_debuts_on_lesson_id", using: :btree
  add_index "word_debuts", ["word_id"], name: "index_word_debuts_on_word_id", using: :btree

  create_table "words", force: :cascade do |t|
    t.integer  "language_id", null: false
    t.string   "content",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "words", ["content"], name: "index_words_on_content", using: :btree
  add_index "words", ["language_id", "content"], name: "index_words_on_language_id_and_content", unique: true, using: :btree
  add_index "words", ["language_id"], name: "index_words_on_language_id", using: :btree

end
