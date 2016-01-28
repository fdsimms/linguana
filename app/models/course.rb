class Course < ActiveRecord::Base
  validates :name, :known_language_id, :target_language_id, presence: true

  belongs_to(
    :target_language,
    class_name: "Language",
    primary_key: :id,
    foreign_key: :target_language_id
  )

  belongs_to(
    :known_language,
    class_name: "Language",
    primary_key: :id,
    foreign_key: :known_language_id
  )

  has_many :skills, dependent: :destroy

end
