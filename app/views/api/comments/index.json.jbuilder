@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :post_id, :created_at, :comment_author_id
        json.commenter comment.commenter, :fname, :lname
        json.commenter do
            user = comment.commenter
            json.extract! user, :fname, :lname
            json.profilePic url_for(user.profile_pic) if user.profile_pic.attached?
        end
    end
end