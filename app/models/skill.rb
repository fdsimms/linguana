class Skill < ActiveRecord::Base
  validates :name, :course_id, null: false

  belongs_to :course
  has_many :completions, as: :completable
  has_many :lessons, dependent: :destroy
  has_one :target_language, through: :course
  has_one :known_language, through: :course

end
