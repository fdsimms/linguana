class CreateAnswerChoices < ActiveRecord::Migration
  def change
    create_table :answer_choices do |t|
      t.integer :exercise_id, null: false, index: true
      t.string :body, null: false

      t.timestamps :exercise_id, null: false, index: true
    end
    add_index :answer_choices, [:exercise_id, :body], unique: true
  end
end
