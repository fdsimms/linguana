spanish_for_english = Course.find_by_name("Spanish")

spanish_basic_1 = Skill.create(
  name: "Basics 1",
  course_id: spanish_for_english.id,
  tips_and_notes: "In this first skill, we're going to introduce an extremely important concept that is found in the majority of languages learned by English speakers in school: grammatical gender. Basically, every noun has a gender (masculine or feminine in Spanish) that serves as a way of categorizing the words. It can be a confusing concept at first, mainly because it isn't completely logical. Sure, some genders make sense: the word 'madre', mother, is in the feminine gender, for example. But so is the word 'camisa', which means shirt. The first seems pretty logical, but the second is hard to explain in terms of rationality. In some languages, gender really affects the grammar, but luckily for us, gender in Spanish mostly only affects which article to use before the noun. Where in English we have the word 'the', Spanish uses 'la' for feminine and 'el' for masculine. Likewise for 'a': Spanish has 'una' for feminine and 'un' for masculine. It's really something you just have to get used to. Whenever you learn a new noun, make sure to learn it along with its gender! That's how we make sure to present new words here. One last tip: masculine nouns often end in 'o', and feminine nouns often end in 'a.' There are a few other rules, and we'll get to them later. For now, good luck!"
)
spanish_basic_2 = Skill.create(
  name: "Basics 2",
  course_id: spanish_for_english.id,
  tips_and_notes: "This skill is going to focus on plurals, which are luckily pretty easy in Spanish. All you have to do is add an 's' or 'es', just like in English. One trick, though, is that in Spanish you also have to make the article plural. So the plural of 'la madre' is 'las madres' The plural of 'el padre' is 'los padres'. This is called \"gender agreement\", because the article has to reflect the gender of the noun it precedes. This is another thing you'll get used to with time, and the concept of agreement will come into play again once we start adjectives. Another thing to watch out for is that in Spanish the pluralizing 's' can't come after a consonant, so you need to put in an 'es' in such cases: it's 'las mujeres', not 'las mujers.' In Lesson 3, you'll learn that masculine is a sort of default gender for mixed-gender plurals–'el padre' singular means 'the father', but 'los padres' plural can mean either 'the fathers' or, if there are both fathers and mothers in the group, 'the parents', no matter how many mothers might be included. Okay, let's get to it!"
 )
spanish_basic_3 = Skill.create(
  name: "Basics 3",
  course_id: spanish_for_english.id,
  tips_and_notes: "For this skill, we'll be focusing on a few words that follow different gender rules in the plural and singular, as well cover a few endings that often signify which gender a word belongs to. Some helpful explanations: the word for water, 'agua', is feminine, but in the singular its article is 'el'. This is because 'el agua' is easier to pronounce than 'la agua'. Also, keep an eye out for the ending '-dad.' It often tells you that a noun is feminine. In this skill, we are also going to review words and add some new ones into the mix. Let's get to work!"
)
spanish_greetings = Skill.create(
  name: "Greetings",
  course_id: spanish_for_english.id,
  tips_and_notes: "Get ready to be able to greet people in Spanish!"
)
spanish_pronouns = Skill.create(
  name: "Pronouns",
  course_id: spanish_for_english.id,
  tips_and_notes: "The most important thing to consider when dealing with Spanish pronouns is which version of 'you' to use. 'Tú' is used in familiar conversation, when you're talking with a friend or a family member or someone of a similar age in an informal context. 'Usted' is more formal–it was originally a contraction of the Spanish for 'Your Mercy'–and is used with people to whom you should show respect, especially elders. The rules for using these two pronouns differs from country to country; in some countries, 'tú' is seen as childish no matter whom you use it with, and in others, 'usted' is almost never heard. Note also that 'nosotros' is used for 'we' even if the group you're talking about includes 10,000 men and a single woman. A little unfair, huh?"
)
spanish_adjectives = Skill.create(
name: "Adjectives",
course_id: spanish_for_english.id,
tips_and_notes: "Let's start off with the two most important things about Spanish adjectives. Like Spanish articles, Spanish adjectives have to agree with the number and gender of the noun that they modify. And unlike English adjectives, Spanish adjectives generally come after the noun rather than before. So 'the red dog' translates to 'el perro rojo'. Some adjectives, like 'increíble' ('incredible'), don't change according to gender. 'Las madres increíbles' and 'los padres increíbles' are both correct. There isn't much more to say than that: let's go!"
)
spanish_verbs_1 = Skill.create(
  name: "Basic Verbs 1",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_verbs_2 = Skill.create(
  name: "Basic Verbs 2",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)
spanish_verbs_3 = Skill.create(
  name: "Basic Verbs 3",
  course_id: spanish_for_english.id,
  tips_and_notes: ""
)

Dir[File.join(Rails.root, 'db', 'seeds', 'spanish_skills', 'skill_*_lessons','*.rb')].sort.each { |seed| load seed }
