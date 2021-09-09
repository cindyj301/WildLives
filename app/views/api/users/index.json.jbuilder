@users.each do |user|
    json.set! user.id do 
        json.extract! user, :id, :fname, :lname, :email, :animal, :status
    end
end