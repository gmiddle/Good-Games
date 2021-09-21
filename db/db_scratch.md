# Scratch File

## PSQL commands

```psql
CREATE USER good_games_dev WITH PASSWORD 'password' SUPERUSER;

CREATE DATABASE good_games WITH OWNER good_games_dev;
```

## Sequelize commands

```bash
npx sequelize model:generate --name User --attributes user_name:string,email:string,password:string

npx sequelize model:generate --name Game --attributes name:string,game_img:string,description:string,developer:string,publisher:string,genre:string,release_date:string

npx sequelize model:generate --name Game_Shelf --attributes shelf_name:string,userId:integer

npx sequelize model:generate --name Shelf_Entry --attributes play_status:boolean,gameId:integer,gameShelfId:integer

npx sequelize model:generate --name Review --attributes rating:numeric,review:string,spoiler_status:boolean,userId:integer,gameId:integer

npx sequelize model:generate --name Genre_tag --attributes genre_tag_name:string

npx sequelize model:generate --name Genre_tag_join --attributes gameId:integer,genreTagId:integer

npx sequelize seed:generate --name seed_user

npx dotenv sequelize db:migrate

npx dotenv sequelize db:migrate:undo:all

npx dotenv sequelize db:seed:all

npx dotenv sequelize db:seed:undo:all

npx dotenv sequelize db:drop

npx dotenv sequelize db:create
```

## Combined Code for drop/migrate/seed

local reset only

```bash
npx dotenv sequelize db:drop && npx dotenv sequelize db:create && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all
```

Heroku reset

```bash
npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:migrate:undo:all && npx dotenv sequelize db:migrate && npx dotenv sequelize db:seed:all
```

Seed only reset

```bash
npx dotenv sequelize db:seed:undo:all && npx dotenv sequelize db:seed:all
```
