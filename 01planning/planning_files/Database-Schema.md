# **Database Schema**

## `users`

| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| user_name   | string    | not null, unique          |
| email       | string    | not null, unique          |
| password    | varchar   | not null                  |
| created_at  | datetime  | not null                  |
| updated-at  | datetime  | not null                  |


## `games`

| column name   | data type     | details               |
|---------------|---------------|-----------------------|
| id            | integer       | not null, primary key |
| name          | string        | not null              |
| game_img      | string        | not null              |
| description   | varchar(280)  | not null              |
| developer     | varchar       | not null              |
| publisher     | varchar       | not null              |
| genre         | varchar       | not null              |
| release_date  | varchar       | not null              |
| created_at    | datetime      | not null              |
| updated-at    | datetime      | not null              |


## `game_shelves`

| column name   | data type   | details               |
|---------------|-------------|-----------------------|
| id            | integer     | not null, primary key |
| shelf_name    | varchar(30) | not null              |
| created_at    | datetime    | not null              |
| updated-at    | datetime    | not null              |
| userId        | integer     | not null, foreign key |

* `userId` references `users` table


## `shelf_entry`

| column name   | data type | details                  |
|---------------|-----------|--------------------------|
| id            | integer   | not null, primary key    |
| play_status   | boolean   | not null                 |
| created_at    | datetime  | not null                 |
| updated-at    | datetime  | not null                 |
| gameId        | integer   | not null, foreign key    |
| gameShelfId   | integer   | not null, foreign key    |

* `gameId` references `games` table
* `gameshelfId` references `game_shelves` table


## `reviews`

| column name    | data type     | details                  |
|----------------|---------------|--------------------------|
| id             | integer       | not null, primary key    |
| rating         | numeric(2, 1) | not null                 |
| review         | varchar(2000) | not null                 |
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
| genre_tag_name | varchar(20) | not null                 |
| updated-at     | datetime    | not null                 |
| created-at     | datetime    | not null                 |


## `genre_tag_join`

| column name  | data type | details                  |
|--------------|-----------|--------------------------|
| id           | integer   | not null, primary key    |
| play_status  | boolean   | not null                 |
| updated-at   | datetime  | not null                 |
| created-at   | datetime  | not null                 |
| gameId       | integer   | not null, foreign key    |
| genreTagId   | integer   | not null, foreign key    |

* `gameId` references `games` table
* `genreTagId` references `genre_tags` table