french_for_english = Course.find_by_name("French")

french_basic_1 = Skill.create!(
  name: "Basics 1",
  course_id: french_for_english.id,
  tips_and_notes: "In this first skill, we're going to introduce an extremely important concept that is found in the majority of languages learned by English speakers in school: grammatical gender. Basically, every noun has a gender (masculine or feminine in French) that serves as a way of categorizing the words. It can be a confusing concept at first, mainly because it isn't completely logical. Sure, some genders make sense: the word 'maman', mom, is in the feminine gender, for example. But so is the word 'chemise', which means shirt. The first seems pretty logical, but the second is hard to explain in terms of rationality. In some languages, gender really affects the grammar, but luckily for us, gender in French mostly only affects which article to use before the noun. Where in English we have the word 'the', French uses 'la' for feminine and 'le' for masculine. Likewise for 'a': French has 'une' for feminine and 'un' for masculine. It's really something you just have to get used to. Whenever you learn a new noun, make sure to learn it along with its gender! That's how we make sure to present new words here. There are a few other rules, and we'll get to them later. For now, good luck!"
)
french_basic_2 = Skill.create!(
  name: "Basics 2",
  course_id: french_for_english.id,
  tips_and_notes: ""
 )
french_basic_3 = Skill.create!(
  name: "Basics 3",
  course_id: french_for_english.id,
  tips_and_notes: ""
)
french_greetings = Skill.create!(
  name: "Greetings",
  course_id: french_for_english.id,
  tips_and_notes: "Get ready to be able to greet people in French!"
)
french_adjectives = Skill.create!(
  name: "Adjectives",
  course_id: french_for_english.id,
  tips_and_notes: ""
)
french_pronouns = Skill.create!(
  name: "Pronouns",
  course_id: french_for_english.id,
  tips_and_notes: ""
)
french_verbs_1 = Skill.create!(
  name: "Basic Verbs 1",
  course_id: french_for_english.id,
  tips_and_notes: ""
)
french_verbs_2 = Skill.create!(
  name: "Basic Verbs 2",
  course_id: french_for_english.id,
  tips_and_notes: ""
)
french_verbs_3 = Skill.create!(
  name: "Basic Verbs 3",
  course_id: french_for_english.id,
  tips_and_notes: ""
)

Dir[File.join(Rails.root, 'db', 'seeds', 'french_skills', 'skill_*_lessons','*.rb')].sort.each { |seed| load seed }
