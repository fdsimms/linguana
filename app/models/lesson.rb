class Lesson < ActiveRecord::Base
  validates :name, :skill_id, presence: true
  validates :name, uniqueness: true

  belongs_to :skill, dependent: :destroy
  has_one :course, through: :skill

end
