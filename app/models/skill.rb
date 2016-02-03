class Skill < ActiveRecord::Base
  validates :name, :course_id, null: false

  belongs_to :course
  has_many :completions, as :completable
  has_many :lessons, dependent: :destroy
end
