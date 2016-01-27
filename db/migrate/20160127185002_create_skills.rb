class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.integer :course_id, null: false, index: true
      t.string :name, null: false, index: true
      t.text :tips_and_notes

      t.timestamps null: false
    end
  end
end
