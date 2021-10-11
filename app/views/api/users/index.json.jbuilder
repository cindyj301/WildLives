@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :fname, :lname, :email, :animal, :status
        json.posts user.posts, :id, :body, :post_author_id, :created_at # wall_id
        json.profilePic url_for(user.profile_pic) if user.profile_pic.attached?
        json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
        json.friends user.friendships, :id, :requester_id, :requestee_id if user.friendships
    end
end