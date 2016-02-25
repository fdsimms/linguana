course = Course.find_by_name("Inglés")
skill = Skill.find_by(name: "Adjectives", course_id: course.id)

lesson = Lesson.find_or_create_by(
  name: "Lesson 2",
  skill_id: skill.id
)

  mcq1 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    thing_to_translate: "Triste",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.find_or_create_by(
    body: "Sad",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.find_or_create_by(
    body: "Nice",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.find_or_create_by(
    body: "Stupid",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Friendly"
  )
  choice_2_1 = AnswerChoice.find_or_create_by(
    body: "Amable",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.find_or_create_by(
    body: "Feliz",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.find_or_create_by(
    body: "Aburrido",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Rápido"
  )
  choice_3_1 = AnswerChoice.find_or_create_by(
    body: "Fast",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.find_or_create_by(
    body: "Young",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.find_or_create_by(
    body: "Smart",
    exercise_id: mcq3.id
  )

  mcq4 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Simpático"
  )
  choice_4_2 = AnswerChoice.find_or_create_by(
    body: "Friendly",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.find_or_create_by(
    body: "Mean",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.find_or_create_by(
    body: "Dumb",
    exercise_id: mcq4.id
  )

  mcq5 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Aburrido"
  )

  choice_5_1 = AnswerChoice.find_or_create_by(
    exercise_id: mcq5.id,
    body: "Bored/boring",
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.find_or_create_by(
  body: "Frustrated",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.find_or_create_by(
    body: "Stubborn",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Fast"
  )

  choice_6_1 = AnswerChoice.find_or_create_by(
    body: "Rápido",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.find_or_create_by(
    body: "Popular",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.find_or_create_by(
    body: "Lente",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Slow"
  )

  choice_7_1 = AnswerChoice.find_or_create_by(
    body: "Lente",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.find_or_create_by(
    body: "Desconocido",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.find_or_create_by(
    body: "Malo",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Popular"
  )

  choice_8_1= AnswerChoice.find_or_create_by(
    body: "Popular",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.find_or_create_by(
    body: "Silencioso",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.find_or_create_by(
    body: "Lente",
    exercise_id: mcq8.id
  )
