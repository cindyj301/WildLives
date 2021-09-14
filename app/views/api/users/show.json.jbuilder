# if @user
    json.extract! @user, :id, :fname, :lname, :email, :animal, :status
    json.profilePic url_for(@user.profile_pic) if @user.profile_pic.attached?
    # json.extract! @user.posts, :post_author_id
# end

# json.posts @user.posts.each do |post|
#     json.extract! post, :id, :body, :post_author_id
# end