let searchInput = "";

function search(event) {
  const enteredInput = document.querySelector("#searchBar").value.toLowerCase().trim();

  if (enteredInput !== searchInput) {
    setSearchInput(enteredInput);
    updatedList();
  }
}

function setSearchInput(input) {
  searchInput = input;
}
