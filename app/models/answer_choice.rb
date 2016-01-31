class AnswerChoice < ActiveRecord::Base
  validates :exercise_id, :content, presence: true

  belongs_to :exercise


end
