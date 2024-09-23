const $ = (tag) => document.querySelector(tag);
const $$ = (tag) => document.querySelectorAll(tag);

$(".form").addEventListener("submit",(e)=>{
e.preventDefault()
let obj = {}
  let inputs =$$(".inputs")
  let result = document.querySelector((".result"))
for (const i of inputs) {
    obj[i.name] = i.value
}
result.innerHTML = `
<div class="w-[${obj.width}px] h-[${obj.hight}px] rounded-[${obj.radius}%] bg-gradient-to-r from-[rgba(255,255,255,0.4)] via-[${obj.bg_color}] to-[${obj.bg_color}]">
</div>
`
for (const i of inputs) {
    i.value = ""
}
})


