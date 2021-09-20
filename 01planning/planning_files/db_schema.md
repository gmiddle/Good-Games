Table users {
  id int [PK]
  email varchar [unique]
  password varchar
  user_name varchar [unique]
  created_at timestamp
  updated_at timestamp
  gameShelfId int
}
Ref: "users"."gameShelfId" < "game_shelves"."id"

Table games {
  id int [PK]
  name text
  game_img text
  description varchar(280)
  developer varchar
  publisher varchar
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
  shelfEntryId int
}
Ref: "game_shelves"."shelfEntryId" < "shelf_entry"."id"

// JOIN table for Games and Game_Shelves
Table shelf_entry {
  id int [PK]
  play_status varchar
  add_to_shelf_date date
  gameId int 
}
Ref: "shelf_entry"."gameId" < "games"."id"

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


Ref: "reviews"."fk_to_games" < "games"."id"

Ref: "users"."id" < "reviews"."fk_to_users"

Ref: "games"."id" < "genre_tag_join"."fk_to_games_game_id"

Ref: "bonus_genre_tags"."id" < "genre_tag_join"."fk_to_genre_tag_genre_tag_id"