
Language.destroy_all
Lesson.destroy_all
Course.destroy_all
User.destroy_all
CourseEnrollment.destroy_all
Completion.destroy_all
Exercise.destroy_all
AnswerChoice.destroy_all
Skill.destroy_all


Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each { |seed| load seed }
