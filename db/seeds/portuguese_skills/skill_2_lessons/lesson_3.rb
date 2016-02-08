course = Course.find_by_name("Portuguese")
skill = Skill.find_by(name: "Basics 2", course_id: course.id)

lesson = Lesson.create!(
  name: "Lesson 3",
  skill_id: skill.id
)

  mcq1 = Exercise.create!(
    lesson_id: lesson.id,
    thing_to_translate: "Los niños",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.create!(
    body: "The children",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.create!(
    body: "The girls",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.create!(
    body: "The women",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The parents"
  )
  choice_2_1 = AnswerChoice.create!(
    body: "Los padres",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.create!(
    body: "Las madres",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.create!(
    body: "Las cucharas",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The grandparents"
  )
  choice_3_1 = AnswerChoice.create!(
    body: "Los abuelos",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.create!(
    body: "Los gatos",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.create!(
    body: "El chocolate",
    exercise_id: mcq3.id
  )


  mcq4 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The grandmothers"
  )
  choice_4_2 = AnswerChoice.create!(
    body: "Las abuelas",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.create!(
    body: "Los abuelos",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.create!(
    body: "El abuelo",
    exercise_id: mcq4.id
  )


  mcq5 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Los abuelos"
  )

  choice_5_1 = AnswerChoice.create!(
    body: "The grandparents",
    exercise_id: mcq5.id,
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.create!(
    body: "The humans",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.create!(
    body: "The cows",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Los chicos"
  )

  choice_6_1 = AnswerChoice.create!(
    body: "The kids",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.create!(
    body: "The spiders",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.create!(
    body: "The tiny babies",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Los amigos"
  )

  choice_7_1 = AnswerChoice.create!(
    body: "The friends",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.create!(
    body: "The people",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.create!(
    body: "The female friends",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Las amigas"
  )


  choice_8_1 = AnswerChoice.create!(
    body: "The female friends",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.create!(
    body: "The male friends",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.create!(
    body: "The female tractors",
    exercise_id: mcq8.id
  )
