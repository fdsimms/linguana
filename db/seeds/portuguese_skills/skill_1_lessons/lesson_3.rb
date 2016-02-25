course = Course.find_by_name("Portuguese")
skill = Skill.find_by(name: "Basics 1", course_id: course.id)

lesson = Lesson.find_or_create_by(
  name: "Lesson 3",
  skill_id: skill.id
)

mcq1 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  thing_to_translate: "El carro",
  exercise_type: "multiple_choice"
)

choice_1_1 = AnswerChoice.find_or_create_by(
  body: "The car",
  exercise_id: mcq1.id,
  is_correct: true

)
choice_1_3 = AnswerChoice.find_or_create_by(
  body: "The candle",
  exercise_id: mcq1.id
)
choice_1_4 = AnswerChoice.find_or_create_by(
  body: "The cat",
  exercise_id: mcq1.id
)


mcq2 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "La chica"
)
choice_2_1 = AnswerChoice.find_or_create_by(
  body: "The girl",
  is_correct: true,
  exercise_id: mcq2.id,
)
choice_2_2 = AnswerChoice.find_or_create_by(
  body: "The boy",
  exercise_id: mcq2.id
)
choice_2_3 = AnswerChoice.find_or_create_by(
  body: "The spoon",
  exercise_id: mcq2.id
)


mcq3 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "El perro"
)
choice_3_1 = AnswerChoice.find_or_create_by(
  body: "The dog",
  is_correct: true,
  exercise_id: mcq3.id,
)
choice_3_2 = AnswerChoice.find_or_create_by(
  body: "The cat",
  exercise_id: mcq3.id
)

choice_3_4 = AnswerChoice.find_or_create_by(
  body: "The anteater",
  exercise_id: mcq3.id
)


mcq4 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "La madre"
)
choice_4_2 = AnswerChoice.find_or_create_by(
  body: "The mother",
  is_correct: true,
  exercise_id: mcq4.id
)
choice_4_3 = AnswerChoice.find_or_create_by(
  body: "The father",
  exercise_id: mcq4.id
)
choice_4_4 = AnswerChoice.find_or_create_by(
  body: "The grandfather",
  exercise_id: mcq4.id
)


mcq5 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The mom"
)

choice_5_1 = AnswerChoice.find_or_create_by(
  body: "La mamá",
  is_correct: true,
  exercise_id: mcq5.id,
)

choice_5_3 = AnswerChoice.find_or_create_by(
  body: "La chica",
  exercise_id: mcq5.id
)
choice_5_4 = AnswerChoice.find_or_create_by(
  body: "El padre",
  exercise_id: mcq5.id
)

mcq6 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The horse"
)

choice_6_1 = AnswerChoice.find_or_create_by(
  body: "El caballo",
  is_correct: true,
  exercise_id: mcq6.id,
)
choice_6_3 = AnswerChoice.find_or_create_by(
  body: "El niño",
  exercise_id: mcq6.id
)
choice_6_4 = AnswerChoice.find_or_create_by(
  body: "El oso",
  exercise_id: mcq6.id
)

mcq7 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "El oso"
)

choice_7_1 = AnswerChoice.find_or_create_by(
  body: "The bear",
  is_correct: true,
  exercise_id: mcq7.id,
)
choice_7_2 = AnswerChoice.find_or_create_by(
  body: "The doctor",
  exercise_id: mcq7.id
)
choice_7_3 = AnswerChoice.find_or_create_by(
  body: "The child",
  exercise_id: mcq7.id
)


mcq8 = Exercise.find_or_create_by(
  lesson_id: lesson.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The chicken"
)

choice_8_1 = AnswerChoice.find_or_create_by(
  body: "El pollo",
  is_correct: true,
  exercise_id: mcq8.id,
)
choice_8_3 = AnswerChoice.find_or_create_by(
  body: "El caballo",
  exercise_id: mcq8.id
)
choice_8_4 = AnswerChoice.find_or_create_by(
  body: "El jefe",
  exercise_id: mcq8.id
)
