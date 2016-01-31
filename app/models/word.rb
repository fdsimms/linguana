class Word < ActiveRecord::Base
  validates :content, :language_id, presence: true

  belongs_to :language

end
