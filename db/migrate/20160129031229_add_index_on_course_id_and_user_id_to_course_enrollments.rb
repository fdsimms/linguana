class AddIndexOnCourseIdAndUserIdToCourseEnrollments < ActiveRecord::Migration
  def change
    add_index :course_enrollments, [:course_id, :user_id], unique: true
  end
end
