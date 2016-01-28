class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.integer :skill_id, null: false, index: true
      t.string :name, null: false, index: true, unique: true

      t.timestamps null: false
    end
  end
end
