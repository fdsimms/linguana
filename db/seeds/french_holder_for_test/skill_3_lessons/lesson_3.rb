french_for_english = Course.find_by_name("Spanish")
french_basic_3 = Skill.find_by(name: "Basics 3", course_id: french_for_english.id)

lesson = Lesson.create!(
  name: "Lesson 3",
  skill_id: french_basic_3.id
)

  mcq1 = Exercise.create!(
    lesson_id: lesson.id,
    thing_to_translate: "La luz",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.create!(
    body: "The light",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.create!(
    body: "The water",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.create!(
    body: "The man",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Las luces"
  )
  choice_2_1 = AnswerChoice.create!(
    body: "The lights",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.create!(
    body: "The turkeys",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.create!(
    body: "The waters",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "El tenedor"
  )
  choice_3_1 = AnswerChoice.create!(
    body: "The fork",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.create!(
    body: "The spoon",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.create!(
    body: "The knife",
    exercise_id: mcq3.id
  )


  mcq4 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The spoon"
  )
  choice_4_2 = AnswerChoice.create!(
    body: "La cuchara",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.create!(
    body: "El tenedor",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.create!(
    body: "La subasta",
    exercise_id: mcq4.id
  )

  mcq5 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Los pollos"
  )

  choice_5_1 = AnswerChoice.create!(
    body: "The chickens",
    exercise_id: mcq5.id,
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.create!(
    body: "The birds",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.create!(
    body: "The roosters",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The questions"
  )

  choice_6_1 = AnswerChoice.create!(
    body: "Las preguntas",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.create!(
    body: "Las respuestas",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.create!(
    body: "Las mesas",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "La oportunidad"
  )

  choice_7_1 = AnswerChoice.create!(
    body: "The opportunity",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.create!(
    body: "The identity",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.create!(
    body: "The laser",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "La persona"
  )

  choice_8_1 = AnswerChoice.create!(
    body: "The person",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.create!(
    body: "The people",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.create!(
    body: "The woman",
    exercise_id: mcq8.id
  )
