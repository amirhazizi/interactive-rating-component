// rate cont
let cont = 0
// selected element
const form = document.querySelector(".form")
const btns = document.querySelectorAll(".btn")

const stateStart = document.querySelector(".state-s")
const stateEnd = document.querySelector(".state-e")
const backBtn = document.querySelector(".back-btn")
const result = document.getElementById("result")

// form buttons eventListener
btns.forEach(function (btn) {
  // click event
  btn.addEventListener("click", function (e) {
    // reset btn
    btns.forEach(function (b) {
      b.classList.remove("select-btn")
      b.classList.remove("selected-btn")
    })
    cont = e.currentTarget.value
    e.currentTarget.classList.add("select-btn")
    if (cont == 1) {
      btns[cont].classList.add("selected-btn")
    } else if (cont == btns.length) {
      btns[cont - 2].classList.add("selected-btn")
    } else {
      btns[cont].classList.add("selected-btn")
      btns[cont - 2].classList.add("selected-btn")
    }
  })
  // mouse enter event
  btn.addEventListener("mouseenter", function (e) {
    e.currentTarget.classList.add("hover-btn")
  })
  // mouse leave event
  btn.addEventListener("mouseleave", function (e) {
    btns.forEach(function (b) {
      b.classList.remove("hover-btn")
    })
  })
})
// form eventListener
form.addEventListener("submit", function (e) {
  e.preventDefault()
  stateStart.classList.add("unshow-div")
  stateEnd.classList.add("show-div")
  result.textContent = cont
})

// back button eventListener
backBtn.addEventListener("click", function () {
  stateStart.classList.remove("unshow-div")
  stateEnd.classList.remove("show-div")
})
