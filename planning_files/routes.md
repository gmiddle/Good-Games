# Routes for Good-Games
## Given three tables: Users, Games, and Game-Shelves...                                                                         
| Path                        | HTTP Verb   | What we're doing                                                                 | BONUS |
| --------------------------- | ----------- | -------------------------------------------------------------------------------- | ----- |   
| /sign-up                    | GET         | Get form to create new user                                                      |       |   
| /users                      | POST        | Submit new user info to user table                                               |       |   
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
| /games/:id                  | POST        | Create a new review for a game                                                   |       |   
| /games/:id                  | PUT / PATCH | Edit a review                                                                    |       |   
| /games/:id                  | DELETE      | Delete a review                                                                  |       |   
| /games/:id                  | POST        | Create a new genre-tag                                                           | BONUS |   
| /games/:id                  | DELETE      | Delete existing genre-tag                                                        | BONUS |   
| /\*                         | GET         | Submit search in nav-bar that exists on all pages                                | BONUS | 