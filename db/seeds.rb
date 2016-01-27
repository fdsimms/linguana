# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


guest = User.create!(
  name: "G.K. Guesterton",
  email: "gk@mailinator.com",
  username: "guest",
  password: "password",
  hometown: "Guestvalia",
  bio: "No one ever saw a better guest than he.",
)
