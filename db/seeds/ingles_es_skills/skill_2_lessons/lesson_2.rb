course = Course.find_by_name("Inglés")
skill = Skill.find_by(name: "Basics 2", course_id: course.id)

lesson = Lesson.find_or_create_by(
  name: "Lesson 2",
  skill_id: skill.id
)

  mcq1 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    thing_to_translate: "Las niñas",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.find_or_create_by(
    body: "The girls",
    exercise_id: mcq1.id,
    is_correct: true
  )

  choice_1_3 = AnswerChoice.find_or_create_by(
    body: "The women",
    exercise_id: mcq1.id
  )

  choice_1_4 = AnswerChoice.find_or_create_by(
    body: "The kittens",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Las madres"
  )
  choice_2_1 = AnswerChoice.find_or_create_by(
    body: "The mothers",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.find_or_create_by(
    body: "The boys",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.find_or_create_by(
    body: "The fathers",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Los perros"
  )
  choice_3_1 = AnswerChoice.find_or_create_by(
    body: "The dogs",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.find_or_create_by(
    body: "The cats",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.find_or_create_by(
    body: "The cookies",
    exercise_id: mcq3.id
  )


  mcq4 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The mothers"
  )
  choice_4_2 = AnswerChoice.find_or_create_by(
    body: "Las madres",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.find_or_create_by(
    body: "El chico",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.find_or_create_by(
    body: "Los gatos",
    exercise_id: mcq4.id
  )


  mcq5 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The women"
  )

  choice_5_1 = AnswerChoice.find_or_create_by(
    body: "Las mujeres",
    exercise_id: mcq5.id,
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.find_or_create_by(
    body: "Las mujers",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.find_or_create_by(
    body: "Las mariposas",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The horses"
  )

  choice_6_1 = AnswerChoice.find_or_create_by(
    body: "Los caballos",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.find_or_create_by(
    body: "Los niños",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.find_or_create_by(
    body: "El niño",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Los gallos"
  )

  choice_7_1 = AnswerChoice.find_or_create_by(
    body: "The roosters",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.find_or_create_by(
    body: "The bears",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.find_or_create_by(
    body: "The hens",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.find_or_create_by(
    lesson_id: lesson.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Los bebés"
  )

  choice_8_1 = AnswerChoice.find_or_create_by(
    body: "The babies",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.find_or_create_by(
    body: "The cows",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.find_or_create_by(
    body: "The women",
    exercise_id: mcq8.id
  )
