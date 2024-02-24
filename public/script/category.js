// const categoryAdd = document.querySelector(".add-form");
// const cardContainer = document.querySelector(".card-container");

// if (categoryAdd) {
//   categoryAdd.addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const { name, image } = event.target;
//     const data = {
//       name: name.value,
//       image: image.value,
//     };
//     const response = await fetch("/api/categories", {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     const res = await response.json();
//     if ((res.message = "success")) {
//       categoryAdd.reset();
//       document
//         .querySelector(".card-container")
//         .insertAdjacentHTML("beforeend", res.html);
//     }
//   });
// }
