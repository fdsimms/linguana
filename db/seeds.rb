
Exercise.destroy_all
AnswerChoice.destroy_all
Word.destroy_all
Translation.destroy_all



Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each { |seed| load seed }
