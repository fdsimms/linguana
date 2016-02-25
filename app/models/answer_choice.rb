require 'byebug'

class AnswerChoice < ActiveRecord::Base
  validates :exercise_id, :body, presence: true
  belongs_to :exercise
  has_one :target_language, through: :exercise

  alias :old_initialize :initialize

  def initialize(attributes = nil)
    old_initialize(attributes)

    if self.exercise.exercise_type == "multiple_choice"
      body = self.body.downcase.split(" ")
      if body.length == 2 && Word.ARTICLES.include?(body[0])
        body = body[1]
      else
        body = body.join(" ")
      end

      word = Word.find_or_create_by({
        language: self.target_language,
        content: body
      })

      if self.is_correct
        content = self.exercise.thing_to_translate.downcase.split(" ")
        if content.length == 2 && Word.ARTICLES.include?(content[0])
          content = content[1]
        else
          content = content.join(" ")
        end

        translation = Word.find_or_create_by({
          language: self.target_language,
          content: content
        })

        Translation.try(:create) {
          { word_1_id: word.id, word_2_id: translation.id }
        }
      end
    end
  end
end
