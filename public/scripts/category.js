
const categoryAdd = document.querySelector(".add-form");
// const cardContainer = document.querySelector(".card-container");

if (categoryAdd) {
  categoryAdd.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { nameCategory, img } = event.target;
    const data = {
      nameCategory: nameCategory.value,
      img: img.value,
    };
    const response = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
    if (res.message === "success") {
      categoryAdd.reset();
      document
        .querySelector(".card-container")
        .insertAdjacentHTML("beforeend", res.html);
    }
  });
}
