course = Course.find_by_name("Spanish")
skill = Skill.find_by(name: "Adjectives", course_id: course.id)

lesson = Lesson.find_or_create_by(
  name: "Lesson 1",
  skill_id: skill.id
)

  mcq1 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    thing_to_translate: "Bueno",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.find_or_create_by(
    body: "Good",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.find_or_create_by(
    body: "Bad",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.find_or_create_by(
    body: "Unresolved",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Delicioso"
  )
  choice_2_1 = AnswerChoice.find_or_create_by(
    body: "Delicious",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.find_or_create_by(
    body: "Good",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.find_or_create_by(
    body: "Red",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Importante"
  )
  choice_3_1 = AnswerChoice.find_or_create_by(
    body: "Important",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.find_or_create_by(
    body: "Bad",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.find_or_create_by(
    body: "Young",
    exercise_id: mcq3.id
  )

  mcq4 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Young"
  )
  choice_4_2 = AnswerChoice.find_or_create_by(
    body: "Jóven",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.find_or_create_by(
    body: "Indignante",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.find_or_create_by(
    body: "Terrible",
    exercise_id: mcq4.id
  )

  mcq5 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Old"
  )

  choice_5_1 = AnswerChoice.find_or_create_by(
    exercise_id: mcq5.id,
    body: "Viejo",
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.find_or_create_by(
  body: "Inteligente",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.find_or_create_by(
    body: "Aburrido",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Important"
  )

  choice_6_1 = AnswerChoice.find_or_create_by(
    body: "Importante",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.find_or_create_by(
    body: "Nuevo",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.find_or_create_by(
    body: "Viejo",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "New"
  )

  choice_7_1 = AnswerChoice.find_or_create_by(
    body: "Nuevo",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.find_or_create_by(
    body: "Viejo",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.find_or_create_by(
    body: "Triste",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Rojo"
  )

  choice_8_1= AnswerChoice.find_or_create_by(
    body: "Red",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.find_or_create_by(
    body: "Important",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.find_or_create_by(
    body: "Young",
    exercise_id: mcq8.id
  )
