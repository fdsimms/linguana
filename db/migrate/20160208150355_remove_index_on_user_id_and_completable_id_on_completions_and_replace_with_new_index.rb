class RemoveIndexOnUserIdAndCompletableIdOnCompletionsAndReplaceWithNewIndex < ActiveRecord::Migration
  def change
    remove_index :completions, name: :index_completions_on_user_id_and_completable_id
    add_index :completions, [:user_id, :completable_id, :completable_type], name: "completions_index", unique: true
  end
end
