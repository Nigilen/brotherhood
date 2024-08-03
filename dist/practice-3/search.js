function regexFilterTable() {
  let search = document.getElementById("searchInput").value.trim();
  let searchRegex = new RegExp(search, "i");

  const rows = document.querySelector(".table").getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    if (searchRegex.test(rows[i].textContent) && search.length >= 3) {
      rows[i].style.display = "";
    } else if (search.length < 3) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

document
  .getElementById("searchInput")
  .addEventListener("keyup", regexFilterTable);
