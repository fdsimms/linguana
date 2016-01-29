class Exercise < ActiveRecord::Base
  validates :thing_to_translate, :lesson_id, :exercise_type, presence: true

  belongs_to :lesson
  has_one :skill, through: :lesson
end
