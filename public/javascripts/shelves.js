document.addEventListener("DOMContentLoaded", (e) => {
  const shelfSubmitButton = document.getElementById("shelf_submit")


// event listener to add a shelf div
  //fetch shelves
  //create div with new shelf inisde it
  //append new shelf to .new_shelf as child
  const eventListener = shelfSubmitButton.addEventListener("submit", async (e) => {
    console.log("----this event listener was hit-----")

    const shelves = await fetch('/game-shelves', {
      method: "GET"
    })
    console.log(shelves)

  })
})

module.exports = {eventListener}
