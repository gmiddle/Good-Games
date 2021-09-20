# User-facing routes

## `/login`

### Log in page

This page displays a log in form

* `GET /login`
* `POST /login`

## `/signup`

This page displays a signup form.

### Sign up page

* `GET /signup`
* `POST /signup`

## `/games`

This page displays the most recently added Games, as well as a navigation bar with a logout button and a search bar(bonus).  Each Game can be clicked to take the user to the specific page for that Game that will have more details like reviews, a rating, short description, and genre tags (bonus).

* `GET /games`


## `/games/:id`

This page displays a specific Game, as well as a navigation bar with a logout button and a search bar(bonus).  This page shows more details like reviews, a rating, short description, and genre tags (bonus) for that game.  The user can view other reviews and click a button to add their own review and rating.  The logged in owners of those reviews can update or delete them.  BONUS: A user will be able to create/add a genre tag and delete it.

* `GET /games/:id`
* `POST /games/:id/reviews`
* `PUT /games/:id/reviews`
* `DELETE /games/:id/reviews`
* `POST /games/:id/genre-tags`
* `DELETE /games/:id/genre-tags`


## `/game-shelves`

This page displays all current game-shelves for a logged-in user, and also a button to create a new game-shelf and a button to remove a game-shelf, as well as a navigation bar with a logout button and search bar (bonus).  A user can also click a button to add a game to the game-shelf, or click a button to remove a game from a game-shelf(PUT/PATCH).

* `GET /game-shelves`
* `POST /game-shelves/:id`
* `PUT /game-shelves/:id`
* `DELETE /game-shelves/:id`



# 
# Routes for Good-Games
## Given three tables: Users, Games, and Game-Shelves...                                                                         
| Path                        | HTTP Verb   | What we're doing                                                                 | BONUS |
| --------------------------- | ----------- | -------------------------------------------------------------------------------- | ----- |   
| /sign-up                    | GET         | Get form to create new user                                                      |       |   
| /sign-up                      | POST        | Submit new user info to user table                                               |       |   
| /log-in                     | GET         | Login page                                                                       |       |   
| /log-in                     | POST        | Submit log-in                                                                    |       |   
| /log-out                    | POST        | Logout Page redirects to home page                                               |       |   
| /games                      | GET         | View a list of recently added games                                              |       |   
| /games/:id                  | GET         | View a specific game and related info (reviews, ratings, description, tags, etc) |       |   
| /game-shelves               | GET         | View all game shelves for a user                                                 |       |   
| /game-shelves/:id           | POST        | Create a new game-shelf                                                          |       |   
| /game-shelves               | GET         | View form to create a new game-shelf                                             |       |   
| /game-shelves/:id           | PUT / PATCH | Remove game from game-shelf                                                      |       |   
| /game-shelves/:id           | DELETE      | Delete game-shelf                                                                |       |   
| /games/:id/reviews                  | POST        | Create a new review for a game                                                   |       |   
| /games/:id/reviews                  | PUT / PATCH | Edit a review                                                                    |       |   
| /games/:id/reviews                  | DELETE      | Delete a review                                                                  |       |   
| /games/:id/genre-tags                  | POST        | Create a new genre-tag                                                           | BONUS |   
| /games/:id/genre-tags                  | DELETE      | Delete existing genre-tag                                                        | BONUS |   
| /\*                         | GET         | Submit search in nav-bar that exists on all pages                                | BONUS | 