course = Course.find_by_name("Anglais")
skill = Skill.find_by(name: "Basic Verbs 3", course_id: course.id)

lesson = Lesson.create!(
  name: "Lesson 1",
  skill_id: skill.id
)

  mcq1 = Exercise.create!(
    lesson_id: lesson.id,
    thing_to_translate: "Las aguas",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.create!(
    body: "The waters",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.create!(
    body: "The women",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.create!(
    body: "The cows",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Las vacas"
  )
  choice_2_1 = AnswerChoice.create!(
    body: "The cows",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.create!(
    body: "The chickens",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.create!(
    body: "The forks",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The hens"
  )
  choice_3_1 = AnswerChoice.create!(
    body: "Las gallinas",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.create!(
    body: "Los genios",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.create!(
    body: "Los patos",
    exercise_id: mcq3.id
  )


  mcq4 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The water"
  )
  choice_4_2 = AnswerChoice.create!(
    body: "El agua",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.create!(
    body: "La cuchara",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.create!(
    body: "Los gatos",
    exercise_id: mcq4.id
  )

  mcq5 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The birds"
  )

  choice_5_1 = AnswerChoice.create!(
    body: "Las aves",
    exercise_id: mcq5.id,
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.create!(
    body: "Los aves",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.create!(
    body: "Las chicas",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The bird"
  )

  choice_6_1 = AnswerChoice.create!(
    body: "El ave",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.create!(
    body: "El bebé",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.create!(
    body: "El oso",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "La honestidad"
  )

  choice_7_1 = AnswerChoice.create!(
    body: "The honesty",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.create!(
    body: "The personality",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.create!(
    body: "The people",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.create!(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "La personalidad"
  )

  choice_8_1 = AnswerChoice.create!(
    body: "The personality",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.create!(
    body: "The possibility",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.create!(
    body: "The ladies",
    exercise_id: mcq8.id
  )
