json.extract! @post, :id, :body, :post_author_id, :created_at
json.author @post.author, :fname, :lname

# json.author do 
    
# end
# json.author do 
#     json.extract! @post.post_author, :id, :fname, :lname, :email, :animal, :status
# end

# json.set! post.id do
#     json.extract! post, :id, :body, :post_author_id, :created_at

#     json.author do 
#         json.extract! post.author, :fname, :lname
#     end
# end