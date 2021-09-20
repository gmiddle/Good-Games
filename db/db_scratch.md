In psql:
CREATE USER good_games_dev WITH PASSWORD 'password' SUPERUSER;

CREATE DATABASE good_games WITH OWNER good_games_dev;

In reg command line:
npx sequelize model:generate --name 

