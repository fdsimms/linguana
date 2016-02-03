class Completion < ActiveRecord::Base
  validates :completable_id, :user_id, presence: true
  validates :completable_type, inclusion: { in: ["lesson", "course", "skill"]}

  belongs_to :completable, polymorphic: true
end
