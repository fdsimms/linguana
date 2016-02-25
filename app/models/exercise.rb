class Exercise < ActiveRecord::Base
  validates :thing_to_translate, :lesson_id, :exercise_type, presence: true

  belongs_to :lesson
  has_one :skill, through: :lesson
  has_many :answer_choices
  has_one :target_language, through: :skill
  has_one :known_language, through: :skill

  # alias :old_initialize :initialize
  #
  # def initialize(attributes = nil)
  #   old_initialize(attributes)
  #   if self.exercise_type == "multiple_choice"
  #     content = self.thing_to_translate.downcase.split(" ")
  #     content = content.length == 2 ? content[1] : content[0]
  #     Word.find_or_create_by({
  #       language: self.target_language,
  #       content: content
  #     })
  #   end
  # end

  def correct_answer
    self.answer_choices.find_by_is_correct(true)
  end

end
