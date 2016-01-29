class CourseEnrollment < ActiveRecord::Base
  validates :course_id, :user_id, presence: true

  belongs_to :course
  belongs_to :user
end
