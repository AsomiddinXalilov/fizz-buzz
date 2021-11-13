var form = document.getElementById("form")
var input = document.getElementById("input")
var form = document.getElementById("form")
var result = document.getElementById("result")

form.addEventListener("submit", function (e){
    e.preventDefault()

    if (input.value % 5 == 0 && input.value % 3 == 0){
        result.textContent = "Fizz Buzz 🔥"
    } else if (input.value % 3 == 0){
        result.textContent = "Buzz 😁"
    } else if (input.value % 5 == 0){
        result.textContent = "Fizz 😉"
    } else {
        result.textContent = "bir aylanib kel "
    }
})
