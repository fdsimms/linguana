class Skill < ActiveRecord::Base
  validates :name, :course_id, null: false

  belongs_to :course

end
