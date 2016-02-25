french_for_english = Course.find_by_name("French")
french_basic_2 = Skill.find_by(name: "Basics 2", course_id: french_for_english.id)

french_basic_2_1 = Lesson.find_or_create_by(
  name: "Lesson 1",
  skill_id: french_basic_2.id
)

  mcq1 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    thing_to_translate: "Les enfants",
    exercise_type: "multiple_choice"
  )

  choice_1_1 = AnswerChoice.find_or_create_by(
    body: "The kids",
    exercise_id: mcq1.id,
    is_correct: true

  )
  choice_1_3 = AnswerChoice.find_or_create_by(
    body: "The women",
    exercise_id: mcq1.id
  )
  choice_1_4 = AnswerChoice.find_or_create_by(
    body: "The cats",
    exercise_id: mcq1.id
  )


  mcq2 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "Les hommes"
  )
  choice_2_1 = AnswerChoice.find_or_create_by(
    body: "The men",
    exercise_id: mcq2.id,
    is_correct: true,
  )
  choice_2_2 = AnswerChoice.find_or_create_by(
    body: "The ladies",
    exercise_id: mcq2.id
  )
  choice_2_3 = AnswerChoice.find_or_create_by(
    body: "The forks",
    exercise_id: mcq2.id
  )


  mcq3 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The dogs"
  )
  choice_3_1 = AnswerChoice.find_or_create_by(
    body: "Les chiens",
    is_correct: true,
    exercise_id: mcq3.id,
  )
  choice_3_2 = AnswerChoice.find_or_create_by(
    body: "Les pommes",
    exercise_id: mcq3.id
  )

  choice_3_4 = AnswerChoice.find_or_create_by(
    body: "Le cheval",
    exercise_id: mcq3.id
  )


  mcq4 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The roosters"
  )
  choice_4_2 = AnswerChoice.find_or_create_by(
    body: "Les coqs",
    is_correct: true,
    exercise_id: mcq4.id
  )
  choice_4_3 = AnswerChoice.find_or_create_by(
    body: "Les poules",
    exercise_id: mcq4.id
  )
  choice_4_4 = AnswerChoice.find_or_create_by(
    body: "Les chats",
    exercise_id: mcq4.id
  )

  mcq5 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The men"
  )

  choice_5_1 = AnswerChoice.find_or_create_by(
    body: "Les hommes",
    exercise_id: mcq5.id,
    is_correct: true,
  )

  choice_5_3 = AnswerChoice.find_or_create_by(
    body: "L'homme",
    exercise_id: mcq5.id
  )
  choice_5_4 = AnswerChoice.find_or_create_by(
    body: "Les filles",
    exercise_id: mcq5.id
  )

  mcq6 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The babies"
  )

  choice_6_1 = AnswerChoice.find_or_create_by(
    body: "Les bébés",
    is_correct: true,
    exercise_id: mcq6.id,
  )
  choice_6_3 = AnswerChoice.find_or_create_by(
    body: "Le bebés",
    exercise_id: mcq6.id
  )
  choice_6_4 = AnswerChoice.find_or_create_by(
    body: "Les ours",
    exercise_id: mcq6.id
  )

  mcq7 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The bears"
  )

  choice_7_1 = AnswerChoice.find_or_create_by(
    body: "Les ours",
    is_correct: true,
    exercise_id: mcq7.id,
  )
  choice_7_2 = AnswerChoice.find_or_create_by(
    body: "L'ours",
    exercise_id: mcq7.id
  )
  choice_7_3 = AnswerChoice.find_or_create_by(
    body: "La ours",
    exercise_id: mcq7.id
  )


  mcq8 = Exercise.find_or_create_by(
    lesson_id: french_basic_2_1.id,
    exercise_type: "multiple_choice",
    thing_to_translate: "The cats"
  )

  choice_8_1 = AnswerChoice.find_or_create_by(
    body: "Les chats",
    is_correct: true,
    exercise_id: mcq8.id,
  )
  choice_8_3 = AnswerChoice.find_or_create_by(
    body: "Les chiens",
    exercise_id: mcq8.id
  )
  choice_8_4 = AnswerChoice.find_or_create_by(
    body: "Les pierres",
    exercise_id: mcq8.id
  )
