class CreateCompletions < ActiveRecord::Migration
  def change
    create_table :completions do |t|
      t.integer :user_id, null: false, index: true
      t.integer :completable_id, null: false, index: true
      t.string :completable_type, null: false, index: true

      t.timestamps null: false
    end
    add_index :completions, [:user_id, :completable_id], unique: true
  end
end
