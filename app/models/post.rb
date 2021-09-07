class Post < ApplicationRecord
    validates :body, presence: true
    validates :post_author_id, presence: true, uniqueness: true

    belongs_to :post_author,
        foreign_key: :post_author_id,
        class_name: "User"
end
