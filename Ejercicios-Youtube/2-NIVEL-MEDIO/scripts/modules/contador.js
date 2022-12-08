let limite_t = 41,
  div = document.querySelector(".home-4-title-years-expe");

for (let i = 0; i <= limite_t; i++) {
  setTimeout(() => {
    div.innerHTML = i;
  }, 100 * i);
}
