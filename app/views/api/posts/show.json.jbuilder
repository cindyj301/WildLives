json.extract! @post, :id, :body, :post_author_id, :created_at
json.author @post.author, :id, :fname, :lname
json.photoUrl url_for(@post.photo) if @post.photo.attached?
json.profilePic url_for(post.author.profile_pic) if post.author.profile_pic.attached?

# json.comments @post.comments, :body, :created_at if @post.comments

# json.author do 
#     json.extract! @post.post_author, :id, :fname, :lname, :email, :animal, :status
# end

# json.set! post.id do
#     json.extract! post, :id, :body, :post_author_id, :created_at
#     json.author do 
#         json.extract! post.author, :fname, :lname
#     end
# end