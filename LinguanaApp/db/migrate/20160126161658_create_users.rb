class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true, index: true
      t.string :password_digest, null: false, index: true
      t.string :session_token, null: false, unique: true, index: true
      t.text :bio
      t.string :name, null: false
      t.string :hometown
      t.string :email, null: false
      t.integer :points, null: false, default: 0
      t.integer :streak_length, null: false, default: 0

      t.timestamps null: false
    end
  end
end
