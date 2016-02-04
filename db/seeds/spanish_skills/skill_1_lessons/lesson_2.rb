spanish_for_english = Course.find_by_name("Spanish")
spanish_basic_1 = Skill.find_by(name: "Basic 1", course_id: spanish_for_english.id)

spanish_basic_1_2 = Lesson.create!(
  name: "Lesson 2",
  skill_id: spanish_basic_1.id
)

mcq1 = Exercise.create!(
  lesson_id: spanish_basic_1_2.id,
  thing_to_translate: "The father",
  exercise_type: "multiple_choice"
)

choice_1_1 = AnswerChoice.create!(
  body: "El padre",
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
  lesson_id: spanish_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The butterfly"
)
choice_2_1 = AnswerChoice.create!(
  is_correct: true,
  body: "La mariposa",
  exercise_id: mcq2.id,
)
choice_2_2 = AnswerChoice.create!(
  body: "El ave",
  exercise_id: mcq2.id
)
choice_2_3 = AnswerChoice.create!(
  body: "El cuchillo",
  exercise_id: mcq2.id
)


mcq3 = Exercise.create!(
  lesson_id: spanish_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The rooster"
)
choice_3_1 = AnswerChoice.create!(
  body: "El doctor",
  exercise_id: mcq3.id,
)
choice_3_2 = AnswerChoice.create!(
  body: "El gato",
  exercise_id: mcq3.id
)

choice_3_4 = AnswerChoice.create!(
  body: "El gallo",
  is_correct: true,
  exercise_id: mcq3.id
)


mcq4 = Exercise.create!(
  lesson_id: spanish_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "La mujer"
)
choice_4_2 = AnswerChoice.create!(
  body: "The woman",
  is_correct: true,
  exercise_id: mcq4.id
)
choice_4_3 = AnswerChoice.create!(
  body: "The boy",
  exercise_id: mcq4.id
)
choice_4_4 = AnswerChoice.create!(
  body: "The pineapple",
  exercise_id: mcq4.id
)


mcq5 = Exercise.create!(
  lesson_id: spanish_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "El hombre"
)

choice_5_1 = AnswerChoice.create!(
  body: "The kid",
  exercise_id: mcq5.id,
)

choice_5_3 = AnswerChoice.create!(
  body: "The man",
  is_correct: true,
  exercise_id: mcq5.id
)
choice_5_4 = AnswerChoice.create!(
  body: "The cloud",
  exercise_id: mcq5.id
)

mcq6 = Exercise.create!(
  lesson_id: spanish_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "El bebé"
)

choice_6_1 = AnswerChoice.create!(
  body: "The baby",
  is_correct: true,
  exercise_id: mcq6.id,
)
choice_6_3 = AnswerChoice.create!(
  body: "The rooster",
  exercise_id: mcq6.id
)
choice_6_4 = AnswerChoice.create!(
  body: "The flower",
  exercise_id: mcq6.id
)

mcq7 = Exercise.create!(
  lesson_id: spanish_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The flower"
)

choice_7_1 = AnswerChoice.create!(
  body: "La flor",
  exercise_id: mcq7.id,
  is_correct: true,
)
choice_7_2 = AnswerChoice.create!(
  body: "El tenedor",
  exercise_id: mcq7.id
)
choice_7_3 = AnswerChoice.create!(
  body: "La mariposa",
  exercise_id: mcq7.id
)


mcq8 = Exercise.create!(
  lesson_id: spanish_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "El chico"
)

choice_8_1 = AnswerChoice.create!(
  body: "The boy",
  is_correct: true,
  exercise_id: mcq8.id,
)
choice_8_3 = AnswerChoice.create!(
  body: "The girl",
  exercise_id: mcq8.id
)
choice_8_4 = AnswerChoice.create!(
  body: "The boss",
  exercise_id: mcq8.id
)
