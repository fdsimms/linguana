class ChangeColumnsInExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :exercise_type, :string, null: false
    remove_column :exercises, :body, :string
    add_column :exercises, :thing_to_translate, :string, null: false
  end
end
