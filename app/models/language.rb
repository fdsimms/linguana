class Language < ActiveRecord::Base
  validates :name, :abbreviation, uniqueness: true, presence: true

  has_many(
    :courses_as_target_language,
    class_name: "Course",
    primary_key: :id,
    foreign_key: :target_language_id
  )
  
  has_many(
    :courses_as_known_language,
    class_name: "Course",
    primary_key: :id,
    foreign_key: :known_language_id
  )

end
