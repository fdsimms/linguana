class AddUniqueConstraintToLessons < ActiveRecord::Migration
  def change
    add_index :lessons, [:name, :skill_id], unique: true
  end
end
