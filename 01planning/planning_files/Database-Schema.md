# **Database Schema**

## `users`

| column name | data type | details                    |
|-------------|------------|---------------------------|
| id          | integer    | not null, primary key     |
| user_name   | string(25) | not null, unique          |
| email       | string(80) | not null, unique          |
| password    | string(80) | not null                  |
| created_at  | datetime   | not null                  |
| updated-at  | datetime   | not null                  |


## `games`

| column name   | data type     | details               |
|---------------|---------------|-----------------------|
| id            | integer       | not null, primary key |
| name          | string        | not null              |
| game_img      | string        | not null              |
| description   | string(500)   | not null              |
| developer     | string        | not null              |
| publisher     | string        | not null              |
| genre         | string        | not null              |
| release_date  | string        | not null              |
| created_at    | datetime      | not null              |
| updated-at    | datetime      | not null              |

## `game_shelves`

| column name   | data type   | details               |
|---------------|-------------|-----------------------|
| id            | integer     | not null, primary key |
| shelf_name    | string(30)  | not null              |
| created_at    | datetime    | not null              |
| updated-at    | datetime    | not null              |
| userId        | integer     | not null, foreign key |

* `userId` references `users` table


## `shelf_entry`

| column name   | data type  | details                  |
|---------------|------------|--------------------------|
| id            | integer    | not null, primary key    |
| play_status   | string(20) | not null                 |
| created_at    | datetime   | not null                 |
| updated-at    | datetime   | not null                 |
| gameId        | integer    | not null, foreign key    |
| gameShelfId   | integer    | not null, foreign key    |

* `gameId` references `games` table
* `gameshelfId` references `game_shelves` table


## `reviews`

| column name    | data type     | details                  |
|----------------|---------------|--------------------------|
| id             | integer       | not null, primary key    |
| rating         | numeric(2, 1) | not null                 |
| review         | string(2000)  | not null                 |
| created-at     | datetime      | not null                 |
| updated-at     | datetime      | not null                 |
| spoiler_status | boolean       | not null, default: false |
| userId         | integer       | not null, foreign key    |
| gameId         | integer       | not null, foreign key    |

* `userId` references `users` table
* `gameId` references `games` table


## `genre_tags`

| column name    | data type   | details                  |
|----------------|-------------|--------------------------|
| id             | integer     | not null, primary key    |
| genre_tag_name | string(20)  | not null                 |
| updated-at     | datetime    | not null                 |
| created-at     | datetime    | not null                 |


## `genre_tag_join`

| column name  | data type | details                  |
|--------------|-----------|--------------------------|
| id           | integer   | not null, primary key    |
| updated-at   | datetime  | not null                 |
| created-at   | datetime  | not null                 |
| gameId       | integer   | not null, foreign key    |
| genreTagId   | integer   | not null, foreign key    |

* `gameId` references `games` table
* `genreTagId` references `genre_tags` table
