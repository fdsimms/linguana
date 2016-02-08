course = Course.find_by_name("Spanish")
skill = Skill.find_by(name: "Greetings", course_id: course.id)

lesson = Lesson.create!(
  name: "Lesson 3",
  skill_id: skill.id
)

  mcq1 = Exercise.create!(
    lesson_id: lesson.id,
    thing_to_translate: "What's your name?",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.create!(
    body: "¿Cómo se llama?",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.create!(
    body: "¿Cómo estás?",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.create!(
    body: "¿Qué?",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "My name is Leopold"
  )
  choice_2_1 = AnswerChoice.create!(
    body: "Me llamo Leopold",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.create!(
    body: "Me llamas Leopold",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.create!(
    body: "Me ama Leopold",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "How are you?"
  )
  choice_3_1 = AnswerChoice.create!(
    body: "¿Cómo estás?",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.create!(
    body: "¿Cómo?",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.create!(
    body: "¿Por qué gritas así?",
    exercise_id: mcq3.id
  )


  mcq4 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Take care"
  )
  choice_4_2 = AnswerChoice.create!(
    body: "Cuídate",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.create!(
    body: "Adiós",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.create!(
    body: "Hasta luego",
    exercise_id: mcq4.id
  )

  mcq5 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "I am Francisco"
  )

  choice_5_1 = AnswerChoice.create!(
    exercise_id: mcq5.id,
    body: "Soy Francisco",
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.create!(
    body: "San Francisco",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.create!(
    body: "Me llamo Helvetica",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Until next we meet"
  )

  choice_6_1 = AnswerChoice.create!(
    body: "Hasta la próxima vez",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.create!(
    body: "Hasta temprano",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.create!(
    body: "Hasta luego",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Are you okay?"
  )

  choice_7_1 = AnswerChoice.create!(
    body: "¿Estás bien?",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.create!(
    body: "¿Eres Rubén?",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.create!(
    body: "Qué novedades?",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "What's up?"
  )

  choice_8_1= AnswerChoice.create!(
    body: "¿Qué pasa?",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.create!(
    body: "¿Porqué me fastidias así?",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.create!(
    body: "¿Qué dices?",
    exercise_id: mcq8.id
  )
