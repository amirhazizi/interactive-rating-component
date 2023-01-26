// rate cont
let cont = 0
// selected element
const form = document.querySelector(".form")
const btns = document.querySelectorAll(".btn")
const stateStart = document.querySelector(".state-s")
const stateEnd = document.querySelector(".state-e")
const result = document.getElementById("result")
// const submitBtn = document.querySelector(".submit")

// buttons event Listener
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    btns.forEach(function (b) {
      b.classList.remove("select-btn")
    })
    cont = e.currentTarget.value
    e.currentTarget.classList.toggle("select-btn")
    console.log(cont)
  })
})
// form eventListener
form.addEventListener("submit", function (e) {
  e.preventDefault()
  stateStart.classList.add("disable")
  stateEnd.classList.add("enable")
  result.textContent = cont
})
