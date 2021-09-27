
Logged-in user:
--------------------------------------------------------
# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy-to-find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying the home page.
      * So that I can easily log out to keep my information secure.

## Good-Games

### Viewing Game-Shelves

* As a logged in user, I want to be able to view a selection of my created Game-Shelves.
  * When I'm on the `/game-shelves` page:
    * I can view all of my created Game-Shelves.
      * So that I can see and interact with my Game-Shelves.

### Create And Remove Game-Shelf (Remove shelf not implmented)

* As a logged in user, I want to be able to post a new Game-Shelf.
  * When I'm on the `/game-shelves/:id` page:
    * I can name and submit a new Game-Shelf.
      * So that I can keep my games and Game-Shelves organized.

* As a logged in user, I want to be able remove a specific Game-Shelf.
  * When I'm on the `/game-shelves/:id` page:
    * I can remove that Game-Shelf.
      * So that I can keep my Games and Game-Shelves organized.


### Adding and Removing A Game To/From A Game-Shelf (Remove game not implemented)

* As a logged in user, I want to be able to add a Game to one of my Game-Shelves.
  * When I'm on the `/games/:id` page:
    * I want to be able to click a button (maybe drop down?) and select the Game-Shelf you want to add the Game to.
      * So that I can keep my Games and Game-Shelves organized.

* As a logged in user, I want to be able to remove a Game from a Game-Shelf.
  * When I'm on the `/game-shelf/:id/gamesId` page:
    * I can remove a game from a Game-Shelf.
      * So that I can keep my games and Game-Shelves organized.

### Viewing Games, Reviews, and Play Status (play status not implemented)

* As a logged in user, I want to be able to view a selection of the most recent Games.
  * When I'm on the `/games` page:
    * I can view the most recently posted Games.
      * So that I can see and interact with the most recently added Games.

* As a logged in user, I want to be able to view a specific Game and its associated Game-Reviews and My Current Play Status (if any).
  * When I'm on the `/games/:id` page:
    * I can view the content of the Game, as well as the associated Game-Reviews.
      * So that I can read and interact with the existing reviews of that game, and add my own thoughts in the Game-Reviews.


### Updating Play Status

* As a logged in user, I want to be able to view a specific Game and update my current play status of that Game.
  * When I'm on the `/games/:id` page:
    * I click a drop down and select a status from a set list: "Played, Currently Playing, Want to Play".
      * So that I can keep track what games I have played, want to play, and am currently playing.

### Creating Game-Reviews / Ratings

* As a logged in user, I want to be able to add a Game-Review by clicking an Add button associated with the specific Game page.
  * When I'm on the `/games/:id` page: (Other pages where reviews will be visible?)
    * I can click "Add" to bring up a form that I can fill out.
    * Once I am done writing my Game-Review and selecting a rating, I can click a "Post/Submit" button to post the Game-Review.
      * So that I can share my thoughts on a specific game.


### Updating Game-Reviews

* As a logged in user, I want to be able to edit my Game-Reviews by clicking an Edit button associated with the Game-Review anywhere that Game-Review appears.
  * When I'm on the `/games/:id` page: (Other pages where reviews will be visible?)
    * I can click "Edit" to make permanent changes to Game-Review I have posted.
      * So that I can fix any errors I make in my Game-Review.

### Deleting Game-Reviews

* As a logged in user, I want to be able to delete my Game-Review by clicking a Delete button associated with the Game-Review anywhere that Game-Review appears.
  * When I'm on the `/games/:id` page: (Other pages where reviews will be visible?)
    * I can click "Delete" to permanently delete a Game-Review I have posted.
      * So that when I realize I shouldn't have publicly said something, I can easily remove it.



