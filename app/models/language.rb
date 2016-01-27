class Language < ActiveRecord::Base
  validates :name, :abbreviation, uniqueness: true, presence: true

end
