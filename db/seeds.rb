# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

user1 = User.create!(
    fname: "Sally",
    lname: "Sloth",
    email: "iluvsloths@gmail.com",
    password: "eatingleaves123",
    animal: "Pygmy three-toed sloth",
    status: "Critically Endangered"
)

user2 = User.create!(
    fname: "Monk",
    lname: "Key",
    email: "bananas@yahoo.com",
    password: 'bananas4bananas',
    animal: "Bornean orangutan",
    status: "Critically Endangered"
)

user3 = User.create!(
    fname: "Tommy",
    lname: "Turtle",
    email: "seaweed_da_best@gmail.com",
    password: 'slowandsteady',
    animal: "Sea turtle",
    status: "Endangered"
)

post1 = Post.create!(
    body: "Down with deforestation",
    post_author_id: user2.id
)

post2 = Post.create!(
    body: "Hanging around with some friends; might take a nap later",
    post_author_id: user1.id
)

post3 = Post.create!(
    body: "Please don't pollute the oceans",
    post_author_id: user3.id
)
