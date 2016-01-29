class CreateCourseEnrollment < ActiveRecord::Migration
  def change
    create_table :course_enrollments do |t|
      t.integer :user_id, null: false, index: true
      t.integer :course_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
