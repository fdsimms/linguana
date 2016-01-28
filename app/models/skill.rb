class Skill < ActiveRecord::Base
  validates :name, :course_id, null: false

end
