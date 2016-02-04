french = Language.find_by_name("French")
portuguese = Language.find_by_name("Portuguese")
english = Language.find_by_name("English")
spanish = Language.find_by_name("Spanish")
esperanto = Language.find_by_name("Esperanto")

Course.destroy_all
Skill.destroy_all

spanish_for_english = Course.create!(
name: "Spanish",
target_language_id: spanish.id,
known_language_id: english.id
)
french_for_english = Course.create!(
  name: "French",
  target_language_id: french.id,
  known_language_id: english.id
)
Dir[File.join(Rails.root, 'db', 'seeds', 'spanish_skills', '*.rb')].sort.each { |seed| load seed }


portuguese_for_english = Course.create!(
  name: "Portuguese",
  target_language_id: portuguese.id,
  known_language_id: english.id
)
esperanto_for_english = Course.create!(
  name: "Esperanto",
  target_language_id: esperanto.id,
  known_language_id: english.id
)
english_for_spanish = Course.create!(
  name: "Inglés",
  target_language_id: english.id,
  known_language_id: spanish.id
)
english_for_french = Course.create!(
  name: "Anglais",
  target_language_id: english.id,
  known_language_id: french.id
)
english_for_portuguese = Course.create!(
  name: "Inglês",
  target_language_id: english.id,
  known_language_id: portuguese.id
)
