french_for_english = Course.find_by_name("French")
french_basic_1 = Skill.find_by(name: "Basics 1", course_id: french_for_english.id)

french_basic_1_2 = Lesson.create!(
  name: "Lesson 2",
  skill_id: french_basic_1.id
)

mcq1 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  thing_to_translate: "The father",
  exercise_type: "multiple_choice"
)

choice_1_1 = AnswerChoice.create!(
  body: "Le père",
  exercise_id: mcq1.id,
  is_correct: true

)
choice_1_3 = AnswerChoice.create!(
  body: "L'homme",
  exercise_id: mcq1.id
)
choice_1_4 = AnswerChoice.create!(
  body: "La femme",
  exercise_id: mcq1.id
)


mcq2 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The butterfly"
)
choice_2_1 = AnswerChoice.create!(
  is_correct: true,
  body: "Le papillon",
  exercise_id: mcq2.id,
)
choice_2_2 = AnswerChoice.create!(
  body: "L'oiseau",
  exercise_id: mcq2.id
)
choice_2_3 = AnswerChoice.create!(
  body: "Le couteau",
  exercise_id: mcq2.id
)


mcq3 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The rooster"
)
choice_3_1 = AnswerChoice.create!(
  body: "Le docteur",
  exercise_id: mcq3.id,
)
choice_3_2 = AnswerChoice.create!(
  body: "Le chat",
  exercise_id: mcq3.id
)

choice_3_4 = AnswerChoice.create!(
  body: "Le coq",
  is_correct: true,
  exercise_id: mcq3.id
)


mcq4 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "La femme"
)
choice_4_2 = AnswerChoice.create!(
  body: "The woman",
  is_correct: true,
  exercise_id: mcq4.id
)
choice_4_3 = AnswerChoice.create!(
  body: "The boy",
  exercise_id: mcq4.id
)
choice_4_4 = AnswerChoice.create!(
  body: "The pineapple",
  exercise_id: mcq4.id
)


mcq5 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "L'homme"
)

choice_5_1 = AnswerChoice.create!(
  body: "The kid",
  exercise_id: mcq5.id,
)

choice_5_3 = AnswerChoice.create!(
  body: "The man",
  is_correct: true,
  exercise_id: mcq5.id
)
choice_5_4 = AnswerChoice.create!(
  body: "The cloud",
  exercise_id: mcq5.id
)

mcq6 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "Le bêbê"
)

choice_6_1 = AnswerChoice.create!(
  body: "The baby",
  is_correct: true,
  exercise_id: mcq6.id,
)
choice_6_3 = AnswerChoice.create!(
  body: "The rooster",
  exercise_id: mcq6.id
)
choice_6_4 = AnswerChoice.create!(
  body: "The flower",
  exercise_id: mcq6.id
)

mcq7 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "The flower"
)

choice_7_1 = AnswerChoice.create!(
  body: "La fleur",
  exercise_id: mcq7.id,
  is_correct: true,
)
choice_7_2 = AnswerChoice.create!(
  body: "La fourchette",
  exercise_id: mcq7.id
)
choice_7_3 = AnswerChoice.create!(
  body: "Le papillon",
  exercise_id: mcq7.id
)


mcq8 = Exercise.create!(
  lesson_id: french_basic_1_2.id,
  exercise_type: "multiple_choice",
  thing_to_translate: "Le garçon"
)

choice_8_1 = AnswerChoice.create!(
  body: "The boy",
  is_correct: true,
  exercise_id: mcq8.id,
)
choice_8_3 = AnswerChoice.create!(
  body: "The girl",
  exercise_id: mcq8.id
)
choice_8_4 = AnswerChoice.create!(
  body: "The boss",
  exercise_id: mcq8.id
)
