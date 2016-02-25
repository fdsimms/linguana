french = Language.find_by_name("French")
portuguese = Language.find_by_name("Portuguese")
english = Language.find_by_name("English")
spanish = Language.find_by_name("Spanish")
esperanto = Language.find_by_name("Esperanto")

# Course.destroy_all
Skill.destroy_all

spanish_for_english = Course.find_or_create_by(
name: "Spanish",
target_language_id: spanish.id,
known_language_id: english.id
)

Dir[File.join(Rails.root, 'db', 'seeds', 'spanish_skills', '*.rb')].sort.each { |seed| load seed }

french_for_english = Course.find_or_create_by(
  name: "French",
  target_language_id: french.id,
  known_language_id: english.id
)
Dir[File.join(Rails.root, 'db', 'seeds', 'french_skills', '*.rb')].sort.each { |seed| load seed }


portuguese_for_english = Course.find_or_create_by(
  name: "Portuguese",
  target_language_id: portuguese.id,
  known_language_id: english.id
)

Dir[File.join(Rails.root, 'db', 'seeds', 'portuguese_skills', '*.rb')].sort.each { |seed| load seed }


esperanto_for_english = Course.find_or_create_by(
  name: "Esperanto",
  target_language_id: esperanto.id,
  known_language_id: english.id
)

Dir[File.join(Rails.root, 'db', 'seeds', 'esperanto_skills', '*.rb')].sort.each { |seed| load seed }


english_for_spanish = Course.find_or_create_by(
  name: "Inglés",
  target_language_id: english.id,
  known_language_id: spanish.id
)

Dir[File.join(Rails.root, 'db', 'seeds', 'ingles_es_skills', '*.rb')].sort.each { |seed| load seed }

english_for_french = Course.find_or_create_by(
  name: "Anglais",
  target_language_id: english.id,
  known_language_id: french.id
)
Dir[File.join(Rails.root, 'db', 'seeds', 'anglais_skills', '*.rb')].sort.each { |seed| load seed }

english_for_portuguese = Course.find_or_create_by(
  name: "Inglês",
  target_language_id: english.id,
  known_language_id: portuguese.id
)

Dir[File.join(Rails.root, 'db', 'seeds', 'ingles_pt_skills', '*.rb')].sort.each { |seed| load seed }



guest = User.find_or_create_by(username: "guest", bio: "He was the best of guests.",
             hometown: "Guestvale", fname: "G.K.", lname: "Guesterton", email: "gk@mailinator.com",
             current_course_id: spanish_for_english.id)

if !guest.password
  guest.password = "password"
  guest.save!
end
