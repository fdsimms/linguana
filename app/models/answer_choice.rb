require 'byebug'

class AnswerChoice < ActiveRecord::Base
  validates :exercise_id, :body, presence: true
  belongs_to :exercise
  has_one :target_language, through: :exercise

  alias :old_initialize :initialize

  def initialize(attributes = nil)
    old_initialize(attributes)
    if self.exercise.exercise_type == "multiple_choice"
      body = self.body.split(" ")
      word_content = body.length == 2 ? body[1] : body[0]
      word = Word.find_or_create_by({
        language: self.target_language,
        content: word_content
      })
      if self.is_correct
        content = self.exercise.thing_to_translate.split(" ")
        content = content.length == 2 ? content[1] : content[0]
        translation = Word.find_or_create_by({
          language: self.target_language
          content: content
        })

        # Translation.find_or_create_by({
        #   word1: word,
        #   word2: translation
        # })
      end
    end
  end
end
