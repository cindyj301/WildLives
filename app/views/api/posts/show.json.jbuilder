json.extract! @post, :id, :body, :post_author_id, :created_at

# json.author do 
#     json.extract! @post.post_author, :id, :fname, :lname, :email, :animal, :status
# end