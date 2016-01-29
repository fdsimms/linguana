class Lesson < ActiveRecord::Base
  validates :name, :skill_id, presence: true
  validates :name, uniqueness: true

  belongs_to :skill, dependent: :destroy
  belongs_to :course, through: :skill

end
