document.addEventListener("DOMContentLoaded", (e) => {
  const shelfSubmitButton = document.getElementById("shelf_submit");
  // event listener to add a shelf div
  //fetch shelves
  //create div with new shelf inisde it with create element
  //append new shelf to .new_shelf as child
  // make template for card of shelf
  //pass in variables to create card
  shelfSubmitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    // console.log("----this event listener was hit-----");

    const shelfName = document.getElementById("shelf_name");

    // console.log(shelfName.value);
    let shelfFetch = await fetch("/api-game-shelves", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shelf_name: shelfName.value }),
    });
    shelfFetch = await shelfFetch.json();
    // console.log("hit", shelfFetch);

    const newShelfDiv = document.createElement("div");
    const newShelfContainer = document.createElement("div")
    const buttonContainer =  document.createElement("div")
    const buttonForm = document.createElement("form")
    const buttonInput = document.createElement("input")
    newShelfDiv.className = "new_shelf"
    newShelfContainer.className = "eachShelf_container"
    buttonContainer.className = "shelf_gamesLink"
    buttonInput.className = "shelf_gamesButton"
    buttonInput.type = "submit"
    buttonInput.value = "Click here to find games to add to your Shelf!"

    buttonForm.action = "/games"
    buttonForm.method = "get"

    buttonContainer.href = "/games"
    newShelfDiv.innerText = shelfFetch.shelf_name;
    let shelfList = document.querySelector(".shelf_list");
    shelfList.appendChild(newShelfDiv);
    newShelfDiv.appendChild(newShelfContainer)
    newShelfContainer.appendChild(buttonContainer)
    buttonContainer.appendChild(buttonForm)
    buttonForm.appendChild(buttonInput)
  });

  const shelfDeleteteButton = document.getElementById("shelf_list")


// TODO: event listener to comment out and leave

  // shelfDeleteteButton.addEventListener("click", (e) => {

  //   if (e.target.classList.contains("delete_button")){
  //     const shelfId = e.target.value
  //     const shelfName = document.getElementById(`shelf_number_${shelfId}`)
  //     shelfName.remove()
  //   }
  // })



});
