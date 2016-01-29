class Lesson < ActiveRecord::Base
  validates :name, :skill_id, presence: true
  validates :name, uniqueness: true

  belongs_to :skill
  has_one :course, through: :skill
  has_many :multiple_choice_qs, dependent: :destroy
end
