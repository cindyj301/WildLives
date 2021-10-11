@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :body, :post_author_id, :wall_id, :created_at
        json.author post.author, :id, :fname, :lname
        json.profilePic url_for(post.author.profile_pic) if post.author.profile_pic.attached?
        json.photoUrl url_for(post.photo) if post.photo.attached?
    end
end