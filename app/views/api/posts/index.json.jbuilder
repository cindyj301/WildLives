@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :post_author_id, :created_at
        json.author post.author, :fname, :lname
        json.photoUrl url_for(post.photo) if post.photo.attached?
    end
end

# json.array! @posts do |post|
#     json.extract! post, :id, :body, :post_author_id, :created_at
#     json.author post.author, :fname, :lname
#     json.photoUrl url_for(post.photo) if post.photo.attached?
# end