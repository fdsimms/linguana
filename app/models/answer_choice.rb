class AnswerChoice < ActiveRecord::Base
  validates :exercise_id, :body, presence: true
  belongs_to :exercise
  has_one :target_language, through: :exercise

  def create(attributes = nil, &block)
    if attributes.is_a?(Array)
      attributes.collect { |attr| create(attr, &block) }
    else
      object = new(attributes, &block)
      object.save
      if object.exercise.exercise_type == "multiple_choice"
        body = object.body.split(" ")
        word_content = body.length == 2 ? body[1] : body[0]
        Word.find_or_create_by({
          language: object.target_language
          content: word_content
        })
      end

      object
    end
  end


end
