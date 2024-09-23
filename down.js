const form = document.querySelector(".form");
const input = document.querySelector(".input");
const result = document.querySelector(".result");
let arr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    arr.push({ id: Date.now(), item: Number(input.value) });
    render();
    input.value = "";
  }
});

function render() {
  result.innerHTML = "";
  arr.forEach((item) => {
    result.innerHTML += `<p class="text-white mx-5 rounded-full w-[70px] h-[70px] bg-green-500 font-bold flex justify-center items-center scale-50 transform transition-all duration-100 ease-in-out  para"><span class="">${item.item}</span></p>`;
  });
}

setInterval(() => {
  arr = arr
    .map((item) => ({ ...item, item: item.item > 0 ? item.item - 1 : 0 }))
    .filter((item) => item.item > 0);

  render();
}, 800);

setInterval(() => {
  let p = document.querySelectorAll(".para");
  p.forEach((el) => {
    console.log(el);
    el.classList.toggle("scale-125");
    el.classList.toggle("bg-red-500");
    el.classList.toggle("rounded-full");
  });
}, 400);
