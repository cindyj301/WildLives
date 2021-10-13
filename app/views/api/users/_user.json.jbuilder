json.extract! user, :id, :fname, :lname, :email, :animal, :status
json.friends user.requestees + user.requesters, :id, :fname, :lname, :email, :animal, :status if user.requestees || user.requesters
json.posts user.posts, :id, :body, :post_author_id, :created_at