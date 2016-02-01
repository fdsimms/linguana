# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# users
User.destroy_all

guest = User.create!(
  name: "G.K. Guesterton",
  email: "gk@mailinator.com",
  username: "guest",
  password: "password",
  hometown: "Guestvalia",
  bio: "No one ever saw a better guest than he."
)
firetrux = User.create!(
  name: "Firetrux O'Nally",
  email: "firetrux@mailinator.com",
  username: "firetrux",
  password: "password",
  hometown: "Houston, TX",
  bio: "The dog, the myth, the legend."
)

# languages
Language.destroy_all

english = Language.create!(name: "English", abbreviation: "en")
french = Language.create!(name: "French", abbreviation: "fr")
spanish = Language.create!(name: "Spanish", abbreviation: "es")
portuguese = Language.create!(name: "Portuguese", abbreviation: "pt")
esperanto = Language.create!(name: "Esperanto", abbreviation: "eo")

# courses
Course.destroy_all
spanish_for_english = Course.create!(
  name: "Spanish",
  target_language_id: spanish.id,
  known_language_id: english.id
)
french_for_english = Course.create!(
  name: "French",
  target_language_id: french.id,
  known_language_id: english.id
)
portuguese_for_english = Course.create!(
  name: "Portuguese",
  target_language_id: portuguese.id,
  known_language_id: english.id
)
esperanto_for_english = Course.create!(
  name: "Esperanto",
  target_language_id: esperanto.id,
  known_language_id: english.id
)
english_for_spanish = Course.create!(
  name: "Inglés",
  target_language_id: english.id,
  known_language_id: spanish.id
)
english_for_french = Course.create!(
  name: "Anglais",
  target_language_id: english.id,
  known_language_id: french.id
)
english_for_portuguese = Course.create!(
  name: "Inglês",
  target_language_id: english.id,
  known_language_id: portuguese.id
)

# skills
Skill.destroy_all
french_basic_1 = Skill.create!(
  name: "Basic 1",
  course_id: french_for_english.id,
  tips_and_notes: "Here we'll teach you some of the basics of French! Allons-y!"
)
french_basic_2 = Skill.create!(
  name: "Basic 2",
  course_id: french_for_english.id,
  tips_and_notes: "Here we'll teach you some more of the basics of French! Allons-y!"
)
french_basic_3 = Skill.create!(
  name: "Basic 3",
  course_id: french_for_english.id,
  tips_and_notes: "So many basics of French!"
)
spanish_basic_1 = Skill.create!(
  name: "Basic 1",
  course_id: spanish_for_english.id,
  tips_and_notes: "Here we'll teach you some of the basics of Spanish! Vamos!"
)
spanish_basic_2 = Skill.create!(
  name: "Basic 2",
  course_id: spanish_for_english.id,
  tips_and_notes: "Here we'll teach you some more of the basics of Spanish! Vamos!"
)
spanish_basic_3 = Skill.create!(
  name: "Basic 3",
  course_id: spanish_for_english.id,
  tips_and_notes: "So many basics of Spanish!"
)
portuguese_basic_1 = Skill.create!(
  name: "Basic 1",
  course_id: portuguese_for_english.id,
  tips_and_notes: "Here we'll teach you some of the basics of Portuguese!"
)
portuguese_basic_2 = Skill.create!(
  name: "Basic 2",
  course_id: portuguese_for_english.id,
  tips_and_notes: "Here we'll teach you some more of the basics of Portuguese!"
)

portuguese_basic_3 = Skill.create!(
  name: "Basic 3",
  course_id: portuguese_for_english.id,
  tips_and_notes: "So many basics of Portuguese!"
)

# lessons

Lesson.destroy_all
spanish_basic_1_1 = Lesson.create!(
  name: "Lesson 1",
  skill_id: spanish_basic_1.id
)
spanish_basic_1_2 = Lesson.create!(
  name: "Lesson 2",
  skill_id: spanish_for_english.id
)
spanish_basic_1_3 = Lesson.create!(
  name: "Lesson 3",
  skill_id: spanish_for_english.id

)

# exercises
#   multiple_choice

Exercise.destroy_all
AnswerChoice.destroy_all
mcq1 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  thing_to_translate: "The boy",
  exercise_type: "multiple_choice"
)

choice_1_1 = AnswerChoice.create!(
  body: "El niño",
  exercise_id: mcq1.id,
  is_correct: true

)
choice_1_3 = AnswerChoice.create!(
  body: "El hombre",
  exercise_id: mcq1.id
)
choice_1_4 = AnswerChoice.create!(
  body: "La mujer",
  exercise_id: mcq1.id
)


mcq2 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The girl"
)
choice_2_1 = AnswerChoice.create!(
  body: "El oso",
  exercise_id: mcq2.id,
)
choice_2_2 = AnswerChoice.create!(
  body: "La niña",
  is_correct: true,
  exercise_id: mcq2.id
)
choice_2_3 = AnswerChoice.create!(
  body: "La cuchara",
  exercise_id: mcq2.id
)


mcq3 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The dog"
)
choice_3_1 = AnswerChoice.create!(
  body: "El niño",
  exercise_id: mcq3.id,
)
choice_3_2 = AnswerChoice.create!(
  body: "El gato",
  exercise_id: mcq3.id
)

choice_3_4 = AnswerChoice.create!(
  body: "El perro",
  is_correct: true,
  exercise_id: mcq3.id
)


mcq4 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The mother"
)
choice_4_2 = AnswerChoice.create!(
  body: "La madre",
  is_correct: true,
  exercise_id: mcq4.id
)
choice_4_3 = AnswerChoice.create!(
  body: "El chico",
  exercise_id: mcq4.id
)
choice_4_4 = AnswerChoice.create!(
  body: "El gato",
  exercise_id: mcq4.id
)


mcq5 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The man"
)

choice_5_1 = AnswerChoice.create!(
  body: "El niño",
  exercise_id: mcq5.id,
)

choice_5_3 = AnswerChoice.create!(
  body: "El hombre",
  is_correct: true,
  exercise_id: mcq5.id
)
choice_5_4 = AnswerChoice.create!(
  body: "La niña",
  exercise_id: mcq5.id
)

mcq6 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The baby"
)

choice_6_1 = AnswerChoice.create!(
  body: "El bebé",
  is_correct: true,
  exercise_id: mcq6.id,
)
choice_6_3 = AnswerChoice.create!(
  body: "El niño",
  exercise_id: mcq6.id
)
choice_6_4 = AnswerChoice.create!(
  body: "El oso",
  exercise_id: mcq6.id
)

mcq7 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The bear"
)

choice_7_1 = AnswerChoice.create!(
  body: "El niño",
  exercise_id: mcq7.id,
)
choice_7_2 = AnswerChoice.create!(
  body: "El oso",
  is_correct: true,
  exercise_id: mcq7.id
)
choice_7_3 = AnswerChoice.create!(
  body: "La mano",
  exercise_id: mcq7.id
)


mcq8 = Exercise.create!(
  lesson_id: spanish_basic_1_1.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The cat"
)

choice_8_1 = AnswerChoice.create!(
  body: "El gato",
  is_correct: true,
  exercise_id: mcq8.id,
)
choice_8_3 = AnswerChoice.create!(
  body: "La mujer",
  exercise_id: mcq8.id
)
choice_8_4 = AnswerChoice.create!(
  body: "El jefe",
  exercise_id: mcq8.id
)


# course enrollments

CourseEnrollment.destroy_all
ce1 = CourseEnrollment.create!(
  user_id: guest.id,
  course_id: french_for_english.id
)
