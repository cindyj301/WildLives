class User < ApplicationRecord
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :status, inclusion: { in: ["Critically Endangered", "Endangered", "Vulnerable"],
        message: "%{value} can't be blank" }

    after_initialize :ensure_session_token

    attr_reader :password

    has_many :posts,
        foreign_key: :post_author_id,
        class_name: :Post,
        dependent: :destroy

    has_many :comments,
        foreign_key: :comment_author_id,
        class_name: :Comment,
        dependent: :destroy

    has_one_attached :profile_pic
    
    has_one_attached :cover_photo

    has_many :requesters,
        foreign_key: :requester_id,
        class_name: :Friend,
        dependent: :destroy
    
    has_many :requestees,
        foreign_key: :requestee_id,
        class_name: :Friend,
        dependent: :destroy

    def friendships
        requesters.or(requestees)
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(64)
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(64)
    end
end
