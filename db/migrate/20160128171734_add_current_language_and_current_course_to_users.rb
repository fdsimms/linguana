class AddCurrentLanguageAndCurrentCourseToUsers < ActiveRecord::Migration
  def change
    add_column :users, :current_language_id, :integer, index: true
    add_column :users, :current_course_id, :integer, index: true
  end
end
