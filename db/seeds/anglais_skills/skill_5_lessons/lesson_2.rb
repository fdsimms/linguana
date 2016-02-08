course = Course.find_by_name("Anglais")
skill = Skill.find_by(name: "Pronouns", course_id: course.id)

lesson = Lesson.create!(
  name: "Lesson 1",
  skill_id: skill.id
)

  mcq1 = Exercise.create!(
    lesson_id: lesson.id,
    thing_to_translate: "They (female)",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.create!(
    body: "Ellas",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.create!(
    body: "Ellos",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.create!(
    body: "Nosotros",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "They (male)"
  )
  choice_2_1 = AnswerChoice.create!(
    body: "Ellos",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.create!(
    body: "Ellas",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.create!(
    body: "Nosotros",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Él"
  )
  choice_3_1 = AnswerChoice.create!(
    body: "He",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.create!(
    body: "She",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.create!(
    body: "They",
    exercise_id: mcq3.id
  )

  mcq4 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Ella"
  )
  choice_4_2 = AnswerChoice.create!(
    body: "She",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.create!(
    body: "He",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.create!(
    body: "They",
    exercise_id: mcq4.id
  )

  mcq5 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "We (male)"
  )

  choice_5_1 = AnswerChoice.create!(
    exercise_id: mcq5.id,
    body: "Nosotros",
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.create!(
  body: "Ellos",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.create!(
    body: "Mis",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "You (plural)"
  )

  choice_6_1 = AnswerChoice.create!(
    body: "Ustedes",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.create!(
    body: "Nosotros",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.create!(
    body: "Tú",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "We (female)"
  )

  choice_7_1 = AnswerChoice.create!(
    body: "Nosotras",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.create!(
    body: "Nosotros",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.create!(
    body: "Nos",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "You all"
  )

  choice_8_1= AnswerChoice.create!(
    body: "Ustedes",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.create!(
    body: "Usted",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.create!(
    body: "Yo",
    exercise_id: mcq8.id
  )
