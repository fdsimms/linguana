class ChangeFluentLanguageIdandLearningLanguageIdNamesInCourses < ActiveRecord::Migration
  def change
    remove_column :courses, :fluent_language_id, :integer
    remove_column :courses, :learning_language_id, :integer
    add_column :courses, :known_language_id, :integer, null: false
    add_column :courses, :target_language_id, :integer, null: false
    add_index :courses, [:target_language_id, :known_language_id], unique: true
  end
end
