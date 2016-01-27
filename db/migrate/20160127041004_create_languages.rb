class CreateLanguages < ActiveRecord::Migration
  def change
    create_table :languages do |t|
      t.string :name, null: false, unique: true, index: true
      t.string :abbreviation, null: false, unique: true

      t.timestamps null: false
    end
  end
end
