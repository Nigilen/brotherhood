function sort(table, columnIndex, dir) {
  const tableBody = table.querySelector(".table__body");
  const tableRows = tableBody.querySelectorAll("tr");
  const rows = Array.from(tableRows);

  rows.sort((a, b) => {
    const strOne = a.cells[columnIndex].textContent.toUpperCase();
    const strTwo = b.cells[columnIndex].textContent.toUpperCase();

    if (dir === "desc") {
      return strOne - strTwo || strOne.localeCompare(strTwo);
    } else {
      return strTwo - strOne || strTwo.localeCompare(strOne);
    }
  });

  tableBody.append(...rows);
}

const tableHeader = document.querySelectorAll("th");

tableHeader.forEach((i, index) => {
  i.addEventListener("click", () => {
    let sortDirection =
      i.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
    i.setAttribute("data-sort-direction", sortDirection);

    sort(document.querySelector(".table"), index, sortDirection);
  });
});
