class Exercise < ActiveRecord::Base
  validates :thing_to_translate, :lesson_id, :exercise_type, presence: true

  belongs_to :lesson
  has_one :skill, through: :lesson
  has_many :answer_choices
  has_one :target_language, through: :skill
  has_one :known_language, through: :skill

  def correct_answer
    self.answer_choices.find_by_is_correct(true)
  end
end
