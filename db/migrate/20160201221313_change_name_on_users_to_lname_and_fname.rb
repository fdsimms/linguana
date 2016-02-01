class ChangeNameOnUsersToLnameAndFname < ActiveRecord::Migration
  def change
    remove_column :users, :name, :string
    add_column :users, :fname, :string, index: true, null: false
    add_column :users, :lname, :string, index: true
  end
end
