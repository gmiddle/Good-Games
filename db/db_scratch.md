In psql:
CREATE USER good_games_dev WITH PASSWORD 'password' SUPERUSER;

CREATE DATABASE good_games WITH OWNER good_games_dev;

In reg command line:
npx sequelize model:generate --name User --attributes user_name:string,email:string,password:string

npx sequelize model:generate --name Game --attributes name:string,game_img:string,description:string,developer:string,publisher:string,genre:string,release_date:string

npx sequelize model:generate --name Game_Shelf --attributes shelf_name:string,userId:integer

npx sequelize model:generate --name Shelf_Entry --attributes play_status:boolean,gameId:integer,gameShelfId:integer

npx sequelize model:generate --name Review --attributes rating:numeric,review:string,spoiler_status:boolean,userId:integer,gameId:integer

npx sequelize model:generate --name Genre_tag --attributes genre_tag_name:string

npx sequelize model:generate --name Genre_tag_join --attributes gameId:integer,genreTagId:integer