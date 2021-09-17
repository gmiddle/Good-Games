Table users {
  id int [PK]
  email varchar [unique]
  password varchar
  user_name varchar [unique]
  created_at timestamp
  updated_at timestamp
  fk_to_game_shelves int
}

Table games {
  id int [PK]
  name text
  game_img text
  short_descript varchar(280)
  developers varchar
  publishers varchar
  genre varchar
  release_date varchar
  play_status varchar
}

Table reviews {
  id int [PK]
  subject varchar(30)
  description varchar(2000)
  created_at timestamp
  updated_at timestamp
  bonus_spoiler_status boolean
  fk_to_games int
  fk_to_users int
}

Table game_shelves{
  id int [PK]
  shelf_name varchar(30)
  created_at timestamp
  updated_at timestamp
  fk_to_shelf_entry int
}

// JOIN table for Games and Game_Shelves
Table shelf_entry {
  id int [PK]
  play_status varchar
  add_to_shelf_date date
  fk_to_game_id int 
}

//BONUS for Genre Tags
Table bonus_genre_tags {
  id int [pk]
  genre_tag_name varchar(20)
  
}

Table genre_tag_join {
  id int [pk]
  fk_to_genre_tag_genre_tag_id int
  fk_to_games_game_id int
}

Ref: "users"."fk_to_game_shelves" < "game_shelves"."id"

Ref: "game_shelves"."fk_to_shelf_entry" < "shelf_entry"."id"

Ref: "shelf_entry"."fk_to_game_id" < "games"."id"

Ref: "reviews"."fk_to_games" < "games"."id"

Ref: "users"."id" < "reviews"."fk_to_users"

Ref: "games"."id" < "genre_tag_join"."fk_to_games_game_id"

Ref: "bonus_genre_tags"."id" < "genre_tag_join"."fk_to_genre_tag_genre_tag_id"