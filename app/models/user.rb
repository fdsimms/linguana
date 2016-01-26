class User < ActiveRecord::Base
  validates :username, :session_token, presence: true, uniqueness: true
  validates :name, :email, :points, presence: true
  validates :streak_length, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    return user.correct_password?(password) ? user : nil
  end

  def self.generate_session_token
    session_token = SecureRandom.urlsafe_base64(16)

    while User.exists?(session_token: session_token)
      session_token = SecureRandom.urlsafe_base64(16)
    end

    session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def correct_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token = User.generate_session_token
  end
end
