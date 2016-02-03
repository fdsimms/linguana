class Lesson < ActiveRecord::Base
  validates :name, :skill_id, presence: true
  validates :name, uniqueness: true

  belongs_to :skill
  has_one :course, through: :skill
  has_many :exercises, dependent: :destroy
  has_many :completions, as: :completable
end
