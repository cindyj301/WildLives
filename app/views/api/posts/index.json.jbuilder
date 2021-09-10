@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :post_author_id, :created_at
        
        json.author post.author, :fname, :lname
    end
end