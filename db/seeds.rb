# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri'

Comment.destroy_all
Post.destroy_all
User.destroy_all

demo_user = User.create!(
    fname: "Sally",
    lname: "Sloth",
    email: "iluvsloths@gmail.com",
    password: "eatingleaves123",
    animal: "Pygmy three-toed sloth",
    status: "Critically Endangered"
)

# file = URI.open('https://wild-lives-seeds.s3.us-east-2.amazonaws.com/sloth_pic.jpeg')
# demo_user.profile_pic.attach(io: file, filename: 'sloth_pic_jpeg')

user1 = User.create!(
    fname: "Monk",
    lname: "Key",
    email: "bananas@yahoo.com",
    password: 'bananas4bananas',
    animal: "Bornean orangutan",
    status: "Critically Endangered"
)

user2 = User.create!(
    fname: "Tommy",
    lname: "Turtle",
    email: "seaweed_da_best@gmail.com",
    password: 'slowandsteady',
    animal: "Sea turtle",
    status: "Endangered"
)

user3 = User.create!(
    fname: 'Emilio',
    lname: 'Elephant',
    email: 'peanuts@email.com',
    password: 'elephants123',
    animal: 'African forest elephant',
    status: 'Critically Endangered'
)

post1 = Post.create!(
    body: "Love me some durian.",
    post_author_id: user1.id
)

post2 = Post.create!(
    body: "Hanging around; might take a nap later.",
    post_author_id: demo_user.id
)

post3 = Post.create!(
    body: "Heading to the water later. Who wants in?",
    post_author_id: user2.id
)

post4 = Post.create!(
    body: 'Love my herd <3',
    post_author_id: user3.id
)

comment1 = Comment.create!(
    body: "I'll swing by!",
    post_id: post2.id,
    comment_author_id: user1.id
)

comment2 = Comment.create!(
    body: "I'll come, but might be late.",
    post_id: post3.id,
    comment_author_id: demo_user.id
)

comment3 = Comment.create!(
    body: "*trumpets*",
    post_id: post1.id,
    comment_author_id: user3.id
)

comment4 = Comment.create!(
    body: "I'll stick to my algae, thanks.",
    post_id: post1.id,
    comment_author_id: user2.id
)