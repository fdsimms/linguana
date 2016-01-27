# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# users
User.destroy_all

guest = User.create!(
  name: "G.K. Guesterton",
  email: "gk@mailinator.com",
  username: "guest",
  password: "password",
  hometown: "Guestvalia",
  bio: "No one ever saw a better guest than he."
)
firetrux = User.create!(
  name: "Firetrux O'Nally",
  email: "firetrux@mailinator.com",
  username: "firetrux",
  password: "password",
  hometown: "Houston, TX",
  bio: "The dog, the myth, the legend."
)

# languages
Language.destroy_all

english = Language.create!(name: "English", abbreviation: "en")
french = Language.create!(name: "French", abbreviation: "fr")
spanish = Language.create!(name: "Spanish", abbreviation: "es")
portuguese = Language.create!(name: "Portuguese", abbreviation: "pt")
esperanto = Language.create!(name: "Esperanto", abbreviation: "ep")

Course.destroy_all
french_for_english = Course.create!(
  name: "French",
  target_language_id: french.id,
  known_language_id: english.id
)
portuguese_for_english = Course.create!(
  name: "Portuguese",
  target_language_id: portuguese.id,
  known_language_id: english.id
)
spanish_for_english = Course.create!(
  name: "Spanish",
  target_language_id: spanish.id,
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
