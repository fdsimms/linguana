class AddAttachmentFlagToLanguages < ActiveRecord::Migration
  def self.up
    change_table :languages do |t|
      t.attachment :flag
    end
  end

  def self.down
    remove_attachment :languages, :flag
  end
end
