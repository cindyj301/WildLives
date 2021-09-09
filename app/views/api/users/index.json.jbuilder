@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :fname, :lname, :email, :animal, :status
        json.posts user.posts, :id, :body, :post_author_id, :created_at
    end
end