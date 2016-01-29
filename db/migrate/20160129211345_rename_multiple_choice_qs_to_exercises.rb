class RenameMultipleChoiceQsToExercises < ActiveRecord::Migration
  def change
    rename_table :multiple_choice_qs, :exercises
  end
end
