class AddIsCorrectToAnswerChoices < ActiveRecord::Migration
  def change
    add_column :answer_choices, :is_correct, :boolean, default: false, null: false
  end
end
