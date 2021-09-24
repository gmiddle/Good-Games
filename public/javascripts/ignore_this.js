document.addEventListener("DOMContentLoaded", (e) => {
  const shelfSubmitButton = document.getElementById("shelf_submit");
  console.log(shelfSubmitButton);

  // event listener to add a shelf div
  //fetch shelves
  //create div with new shelf inisde it with create element
  //append new shelf to .new_shelf as child
  // make template for card of shelf
  //pass in variables to create card
  shelfSubmitButton.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("----this event listener was hit-----");

    const tester = document.createElement("h1")
    console.log(tester)
    tester.innerText = "TESTER"
    let body = document.querySelector(".shelf_list")
    body.appendChild(tester)
    const shelves = await fetch("/game-shelves", {
      method: "GET",
    });
    // console.log(shelves);
  });
});
