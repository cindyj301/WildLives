@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :fname, :lname, :email, :animal, :status
        json.posts user.posts, :id, :body, :post_author_id, :created_at
        json.profilePic url_for(user.profile_pic) if user.profile_pic.attached?
        json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
        json.friends user.requestees, :id, :fname, :lname, :email, :animal, :status if user.requesters
    end
end