const table = document.querySelector(".table__body");
const tableRow = document.querySelector("#table-row-tmp").content;

async function loadPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

loadPosts().then((data) => {
  data.forEach((i) => {
    const row = tableRow.cloneNode(true);

    row.querySelector(".table__cell-id").textContent = i.id;
    row.querySelector(".table__cell-user-id").textContent = i.userId;
    row.querySelector(".table__cell-title").textContent = i.title;
    row.querySelector(".table__cell-body").textContent = i.body;

    table.appendChild(row);
  });
});
