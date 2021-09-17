<h1 align="center">WildLives</h1>
<p align="center">
  <img src="https://user-images.githubusercontent.com/84679041/133845413-dc9262a3-fa37-4aea-8d81-c2f03d6b23d7.png" />
</p>

## Live Site
[Into the wild](https://wild-lives.herokuapp.com/#/) 🦥

## Introduction
WildLives is a social networking application sharing the wild lives of wild life! Sign up as an endangered animal species and share posts, make comments, and upload pictures with your wild life pals.

## Technologies Used
### Frontend
* React
* Redux
* JavaScript
* HTML5
* CSS3
### Backend
* Ruby on Rails
* PostgreSQL
### Additional
* Webpack
* Git
* AWS

## Features
* Users can create an account and log in to their existing account.
* Users can interact with each other through posts and comments and photos
* Users can make friend request and add and remove friends.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/84679041/133860449-15edfd3d-9e2a-4d6c-9cce-f21e6c4b0166.gif)

## Highlights
* An interesting aspect of creating posts and comments was to find a way to parse the date coming from the relational database tables into something understandable for the user. The following code demonstrates the JavaScript function used to implement the date formatting for posts and comments.

```js
export const formatDate = createdAt => {
    const dateOptions = { month: 'long', day: 'numeric' };
    const dateYearOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: '2-digit' };

    const date = new Date(createdAt);
    let time = Date.now() - Date.parse(date); // parsed date is returned in ms

    if (date.year === Date.now.year && Math.floor(time / 86400000) > 0) { // if current year && time > 24h
        return `${date.toLocaleDateString('en-US', dateOptions)} at ${date.toLocaleTimeString('en-US', timeOptions)}`; // return date without year
    } else if (date.year !== Date.now.year && Math.floor(time / 86400000) > 0) { // if not current year && time > 24h
        return `${date.toLocaleDateString('en-US', dateYearOptions)} at ${date.toLocaleTimeString('en-US', timeOptions)}`; // return date with year
    } else if (Math.floor(time / 3600000) > 0) { // if greater than 1h
        return Math.floor(time / 3600000) + 'h';
    } else { // if greater than 1m
        return Math.floor(time / 60000) + 'm'
    }
}
```

## Deployment Instructions
1. Clone the repo on your machine.
2. Delete Gemfile and package-json lock files, if needed.
3. Run the following commands:
* Make sure to have PostgreSQL running.
* `npm install`
* `bundle install`
* `bundle exec rails db:create`
* `bundle exec rails db:setup`
* `npm run webpack`
* In a new terminal, run `bundle exec rails s`

## Image Credits
* [WildLives Logo](http://skobo.pl/annskoblog/project/sloth-logo/)
* [Sloth Friends Icon](https://www.pngitem.com/middle/ThhwmJo_draw-so-cute-sloth-cartoon-sloth-png-transparent/)
