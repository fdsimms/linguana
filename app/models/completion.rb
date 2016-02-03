class Completion < ActiveRecord::Base
  validates :imageable_id, :user_id, presence: true
  validates :imageable_type, inclusion: { in: ["lesson", "course", "skill"]}

  belongs_to :completable, polymorphic: true
end
