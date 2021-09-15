json.array! @friend do |fri|
    json.extract! fri, :id, :requester_id, :requestee_id
end