# **Database Schema**

## `users`

| column name | data type | details                   |
|-------------|-----------|---------------------------|
| id          | integer   | not null, primary key     |
| user_name   | string    | not null, unique          |
| email       | string    | not null, indexed, unique |
| password    | varchar   | not null, unique          |
| created_at  | datetime  | not null                  |
| updated-at  | datetime  | not null                  |
| gameShelfId | integer   | not null, foreign key     |

* index on `email, unique: true`
* `gameshelfId` references `game_shelves` table

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
| shelfEntryId  | integer     | not null, foreign key |

* `shelfEntryId` references `shelf_entry` table


## `shelf_entry`

| column name   | data type | details                  |
|---------------|-----------|--------------------------|
| id            | integer   | not null, primary key    |
| play_status   | boolean   | not null                 |
| updated-at    | datetime  | not null                 |
| gameId        | integer   | not null, foreign key    |

* `gameId` references `games` table
