class Translation < ActiveRecord::Base
  validates :word_1_id, :word_2_id, presence: true
  validate :no_repeat_translations

  belongs_to(
    :first_word,
    class_name: "Word",
    foreign_key: :word_1_id,
    primary_key: :id
  )

  belongs_to(
    :second_word,
    class_name: "Word",
    foreign_key: :word_2_id,
    primary_key: :id
  )

  def words
    [self.first_word, self.second_word]
  end

  def languages
    [self.first_word.language, self.second_word.language]
  end

  private

  def no_repeat_translations
    translation = Translation.find_by({
      word_1_id: self.word_2_id,
      word_2_id: self.word_1_id
    })

    translation ? false : true
  end

end
