if @user
    json.extract! @user, :id, :fname, :lname, :email, :animal, :status

    # json.posts @user.posts.each do |post|
    #     json.extract! post, :id, :body, :post_author_id
    # end
end