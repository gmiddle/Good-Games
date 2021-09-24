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
    console.log("----this event listener was hit-----");

    const shelfName = document.getElementById("shelf_name");

    console.log(shelfName.value);
    let shelfFetch = await fetch("/api-game-shelves", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ shelf_name: shelfName.value }),
    });
    shelfFetch = await shelfFetch.json();
    console.log("hit", shelfFetch);

    const newShelfDiv = document.createElement("div");

    newShelfDiv.innerText = shelfFetch.shelf_name;
    let shelfList = document.querySelector(".shelf_list");
    shelfList.appendChild(newShelfDiv);
  });
});


