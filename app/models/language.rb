class Language < ActiveRecord::Base
  validates :name, :abbreviation, uniqueness: true, presence: true
  has_attached_file :flag, default_url: "/images/:style/missing_flag.png"
  validates_attachment_content_type :flag, content_type: /\Aimage\/.*\Z/

  has_many(
    :courses_as_target_language,
    class_name: "Course",
    primary_key: :id,
    foreign_key: :target_language_id,
    dependent: :destroy
  )

  has_many(
    :courses_as_known_language,
    class_name: "Course",
    primary_key: :id,
    foreign_key: :known_language_id,
    dependent: :destroy
  )

  has_many :words

end
