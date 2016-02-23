spanish_for_english = Course.find_by_name("Portuguese")

spanish_basic_1 = Skill.create!(
  name: "Basics 1",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_basic_2 = Skill.create!(
  name: "Basics 2",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
 )
spanish_basic_3 = Skill.create!(
  name: "Basics 3",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_greetings = Skill.create!(
  name: "Greetings",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_pronouns = Skill.create!(
  name: "Pronouns",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_adjectives = Skill.create!(
name: "Adjectives",
course_id: spanish_for_english.id,
tips_and_notes: ""
)
spanish_verbs_1 = Skill.create!(
  name: "Basic Verbs 1",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_verbs_2 = Skill.create!(
  name: "Basic Verbs 2",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_verbs_3 = Skill.create!(
  name: "Basic Verbs 3",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)

Dir[File.join(Rails.root, 'db', 'seeds', 'portuguese_skills', 'skill_*_lessons','*.rb')].sort.each { |seed| load seed }
