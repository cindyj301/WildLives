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
    fname: "Ollie",
    lname: "Orangutan",
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
    password: 'password',
    animal: 'African forest elephant',
    status: 'Critically Endangered'
)

user4 = User.create!(
    fname: 'Polly',
    lname: 'Penguin',
    email: 'polly@email.com',
    password: 'password',
    animal: 'Southern Rockhopper Penguin',
    status: 'Vulnerable'
)

user5 = User.create!(
    fname: 'Peter',
    lname: 'Panda',
    email: 'panda@email.com',
    password: 'password',
    animal: 'Red Panda',
    status: 'Endangered'
)

user6 = User.create!(
    fname: 'Lenny',
    lname: 'Leopard',
    email: 'leopard@email.com',
    password: 'password',
    animal: 'Snow Leopard',
    status: 'Vulnerable'
)

user7 = User.create!(
    fname: 'Penelope',
    lname: 'Porpoise',
    email: 'porpoise@email.com',
    password: 'password',
    animal: 'Yangtze Finless Porpoise',
    status: 'Critically Endangered'
)

user8 = User.create!(
    fname: 'Fiona',
    lname: 'Ferret',
    email: 'ferret@email.com',
    password: 'password',
    animal: 'Black-footed Ferret',
    status: 'Endangered'
)

user9 = User.create!(
    fname: 'Camille',
    lname: 'Cat',
    email: 'email@email.com',
    password: 'password',
    animal: 'Rusty-spotted Cat',
    status: 'Vulnerable'
)

user10 = User.create!(
    fname: 'Waldo',
    lname: 'Whale',
    email: 'whale@email.com',
    password: 'password',
    animal: 'Blue Whale',
    status: 'Endangered'
)

post1 = Post.create!(
    body: "Love me some durian.",
    post_author_id: user1.id,
    wall_id: user1.id
)

post2 = Post.create!(
    body: "Hanging around; might take a nap later.",
    post_author_id: demo_user.id,
    wall_id: demo_user.id
)

post3 = Post.create!(
    body: "Heading to the water later. Who wants in?",
    post_author_id: user2.id,
    wall_id: user2.id
)

post4 = Post.create!(
    body: 'Love my herd <3',
    post_author_id: user3.id,
    wall_id: user3.id
)

post5 = Post.create!(
    body: "Can't wait to go climbing later!",
    post_author_id: user6.id,
    wall_id: user6.id
)

post6 = Post.create!(
    body: 'Eating some plankton.',
    post_author_id: user4.id,
    wall_id: user4.id
)

post7 = Post.create!(
    body: 'Miss my Baiji dolphin friends :(',
    post_author_id: user7.id,
    wall_id: user7.id
)

post8 = Post.create!(
    body: "Swimmin' solo.",
    post_author_id: user10.id,
    wall_id: user10.id
)

post9 = Post.create!(
    body: 'Playing Solitare.',
    post_author_id: user8.id,
    wall_id: user8.id
)

post10 = Post.create!(
    body: 'Staying up late tonight.',
    post_author_id: user9.id,
    wall_id: user9.id
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
    body: "I'm down to join!",
    post_id: post5.id,
    comment_author_id: user5.id
)

comment5 = Comment.create!(
    body: "Swimming with my herd. Want to join?",
    post_id: post8.id,
    comment_author_id: user3.id
)

comment6 = Comment.create!(
    body: "I prefer twigs.",
    post_id: post6.id,
    comment_author_id: demo_user.id
)

comment7 = Comment.create!(
    body: "I got a cool colony.",
    post_id: post4.id,
    comment_author_id: user4.id
)

Friend.create!(requester_id: demo_user.id, requestee_id: user1.id)
Friend.create!(requester_id: demo_user.id, requestee_id: user2.id)
Friend.create!(requester_id: demo_user.id, requestee_id: user3.id)
Friend.create!(requester_id: demo_user.id, requestee_id: user4.id)
Friend.create!(requester_id: demo_user.id, requestee_id: user5.id)