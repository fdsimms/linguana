
Exercise.destroy_all
AnswerChoice.destroy_all



Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each { |seed| load seed }
