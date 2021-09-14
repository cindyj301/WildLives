@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :post_author_id, :created_at
        json.author post.author, :fname, :lname
        json.photoUrl url_for(post.photo) if post.photo.attached?
        # json.comments post.comments, :body, :created_at, :comment_author_id if post.comments
        # if post.comments
        #     json.comments post.comments do |comment|
        #         json.set! comment.id do
        #             json.extract! comment, :body, :created_at
        #             user = comment.commenter
        #             json.extract! user, :id, :fname, :lname
        #             json.profilePic url_for(user.profile_pic) if user.profile_pic.attached?
        #         end
        #     end
        # end
    end
end

# json.array! @posts do |post|
#     json.extract! post, :id, :body, :post_author_id, :created_at
#     json.author post.author, :fname, :lname
#     json.photoUrl url_for(post.photo) if post.photo.attached?
# end