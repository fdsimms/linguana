course = Course.find_by_name("Portuguese")
skill = Skill.find_by(name: "Basics 1", course_id: course.id)

lesson = Lesson.create!(
  name: "Lesson 1",
  skill_id: skill.id
)

  mcq1 = Exercise.create!(
    lesson_id: lesson.id,
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
    lesson_id: lesson.id,
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
    lesson_id: lesson.id,
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
    lesson_id: lesson.id,
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
    lesson_id: lesson.id,
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
    lesson_id: lesson.id,
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
    lesson_id: lesson.id,
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
    lesson_id: lesson.id,
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
