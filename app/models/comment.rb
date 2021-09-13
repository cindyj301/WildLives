class Comment < ApplicationRecord
    validates :body, :post_id, :comment_author_id, presence: true

    belongs_to :post,
        foreign_key: :post_id,
        class_name: "Comment",
        optional: true

    belongs_to :commenter,
        foreign_key: :comment_author_id,
        class_name: "User"
end
