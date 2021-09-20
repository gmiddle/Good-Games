Table users {
  id int [PK]
  email varchar [unique]
  password varchar
  user_name varchar [unique]
  created_at timestamp
  updated_at timestamp
}


Table games {
  id int [PK]
  name text [unique, not null]
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
  rating numeric(2, 1)
  review varchar(2000)
  created_at timestamp
  updated_at timestamp
  spoiler_status boolean
  gameId int
  userId int
}

Table game_shelves{
  id int [PK]
  shelf_name varchar(30)
  created_at timestamp
  updated_at timestamp
  userId int
}


// JOIN table for Games and Game_Shelves
Table shelf_entry {
  id int [PK]
  play_status varchar
  created_at timestamp
  updated_at timestamp
  gameId int
  gameShelfId int
}
Ref: "shelf_entry"."gameId" < "games"."id"

//BONUS for Genre Tags
Table genre_tags {
  id int [pk]
  genre_tag_name varchar(20)
  created_at timestamp
  updated_at timestamp
  
}

Table genre_tag_join {
  id int [pk]
  created_at timestamp
  updated_at timestamp
  genreTagId int
  gameId int
}


Ref: "reviews"."gameId" < "games"."id"

Ref: "users"."id" < "reviews"."userId"

Ref: "games"."id" < "genre_tag_join"."gameId"

Ref: "genre_tags"."id" < "genre_tag_join"."genreTagId"

Ref: "game_shelves"."id" < "shelf_entry"."gameShelfId"

Ref: "game_shelves"."userId" < "users"."id"