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

ActiveRecord::Schema.define(version: 20160129031229) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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

  create_table "languages", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "abbreviation", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
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
    t.string   "username",                        null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.text     "bio"
    t.string   "name",                            null: false
    t.string   "hometown"
    t.string   "email",                           null: false
    t.integer  "points",              default: 0, null: false
    t.integer  "streak_length",       default: 0, null: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "current_language_id"
    t.integer  "current_course_id"
  end

  add_index "users", ["password_digest"], name: "index_users_on_password_digest", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree
  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
