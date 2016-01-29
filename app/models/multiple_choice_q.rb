class MultipleChoiceQ < ActiveRecord::Base
  validates :body, :lesson_id, presence: true
  validates :body, uniqueness: true

  belongs_to :lesson
  has_one :skill, through: :lesson
end
