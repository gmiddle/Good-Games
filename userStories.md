Who Wants It
What Do They Want
Why Do They Want It


Non-logged in user (NLU):
- As a NLU, I want to be able to view content (Ex: Picture of cover art, name of game, rating, reviews, etc.) so that I can get more info about games.

- As a NLU, I want to be able to have access to a sign up form in order to create an account.



- As a new user I want to be able to create an account to be able to log in and access my account info and interact with content (ex: write a review, vote up/down).


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

### Create Game-Shelf

* As a logged in user, I want to be able to post a new Game-Shelf.
  * When I'm on the `/new-game-shelf` page:
    * I can name and submit a new Game-Shelf.
      * So that I can keep my games organized.

### Viewing Games-Shelves

* As a logged in user, I want to be able to view a selection of my created Game-Shelves.
  * When I'm on the `/profile` page:
    * I can view all of my created Game-Shelves.
      * So that I can read and interact with my Game-Shelves.

* As a logged in user, I want to be able to view a specific Game-Shelf.
  * When I'm on the `/game-shelf/:id` page:
    * I can all the games that have been added to that Game-Shelf.
      * So that I can read and interact with my Games that are on that Game-Shelf.

* As a logged in user, I want to be able to remove a Game to a Game-Shelf.
  * When I'm on the `/game-shelf/:id/gamesId` page:
    * I can .
      * So that I can read and interact with the thoughts and memes of my friends.

### Viewing Games

* As a logged in _or_ logged out user, I want to be able to view a selection of the most recent Games.
  * When I'm on the `/` page:
    * I can view the ten most recently posted Games.
      * So that I can read and interact with the thoughts and memes of my friends.

* As a logged in _or_ logged out user, I want to be able to view a selection of the most recent Games.
  * When I'm on the `/games` page:
    * I can view the ten most recently posted Games.
      * So that I can read and interact with the thoughts and memes of my friends.

* As a logged in _or_ logged out user, I want to be able to view a specific Game and its associated Game-Reviews.
  * When I'm on the `/games/:id` page:
    * I can view the content of the Game, as well as the associated Game-Reviews.
      * So that I can read and interact with the thoughts and memes of my friends, and add my own thoughts and memes in the Game-Comments.

### Updating FauxTweets

* As a logged in user, I want to be able to edit my FauxTweets by clicking an Edit button associated with the FauxTweet anywhere that FauxTweet appears.
  * When I'm on the `/fauxtweets`, `/fauxtweets/:id`, or `/users/:id/fauxtweets` pages:
    * I can click "Edit" to make permanent changes to FauxTweets I have posted.
      * So that I can fix any errors I make in my FauxTweets.

### Deleting FauxTweets

* As a logged in user, I want to be able to delete my FauxTweets by clicking a Delete button associated with the FauxTweet anywhere that FauxTweet appears.
  * When I'm on the `/fauxtweets`, `/fauxtweets/:id`, or `/users/:id/fauxtweets` pages:
    * I can click "Delete" to permanently delete a FauxTweet I have posted.
      * So that when I realize I shouldn't have publicly said something, I can easily remove it.



