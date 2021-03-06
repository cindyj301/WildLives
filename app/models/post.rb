class Post < ApplicationRecord
    validates :body, :post_author_id, :wall_id, presence: true

    has_one_attached :photo

    belongs_to :author,
        foreign_key: :post_author_id,
        class_name: :User

    belongs_to :wall,
        foreign_key: :wall_id,
        class_name: :User
    
    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment,
        dependent: :destroy
end
