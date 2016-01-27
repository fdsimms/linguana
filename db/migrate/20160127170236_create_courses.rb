class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.integer :fluent_language_id, null: false, index: true
      t.integer :learning_language_id, null: false, index: true
      t.string :name, null: false

      t.timestamps null: false
    end

    add_index :courses, [:fluent_language_id, :learning_language_id], unique: true
  end
end
