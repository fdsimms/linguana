class DropDictionaries < ActiveRecord::Migration
  def change
    drop_table :dictionaries
  end
end
