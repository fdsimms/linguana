class Word < ActiveRecord::Base
  validates :content, :language_id, presence: true

  belongs_to :language

  def self.ARTICLES
    articles = [
      'el',
      'la',
      'o',
      'a',
      'le',
      'les',
      'los',
      'os',
      'las',
      'as',
      'the',
      'a',
      'una',
      'une',
      'un',
      'um',
      'uma'
    ]
  end
end
