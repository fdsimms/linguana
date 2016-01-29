class CreateMultipleChoiceQs < ActiveRecord::Migration
  def change
    create_table :multiple_choice_qs do |t|
      t.integer :lesson_id, null: false, index: true
      t.string :body, null: false, unique: true

      t.timestamps null: false
    end
  end
end
