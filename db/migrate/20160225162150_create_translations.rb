class CreateTranslations < ActiveRecord::Migration
  def change
    create_table :translations do |t|
      t.integer :word_1_id, null: false
      t.integer :word_2_id, null: false

      t.timestamps null: false
    end

    add_index :translations, [:word_1_id, :word_2_id], unique: true
  end
end
