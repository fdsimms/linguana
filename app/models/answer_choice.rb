class AnswerChoice < ActiveRecord::Base
  validates :exercise_id, :body, presence: true

  belongs_to :exercise

end
