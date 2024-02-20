/* formulars

increase = new value - Original Number ÷ Original Number × 100
decrease = Original Number - new value / Original Number x 100
*/


//linking elements
const originalEl = document.getElementById("original")
const newEl = document.getElementById("new")
const answerEl = document.getElementById("answer")
const inButtonEl = document.getElementById("inButton")
const deButtonEl = document.getElementById("deButton")

//inout boxes
originalEl.addEventListener("click", function(){
  originalEl.value=""
  answerEl.textContent=""
})
newEl.addEventListener("click", function(){
  newEl.value=""
  answerEl.textContent=""
})


//answer when button clicked
inButtonEl.addEventListener("click", function(){
      /*increase*/
let inStep1 = newEl.value - originalEl.value
let inStep2 = inStep1 / originalEl.value
let inStep3 = inStep2 * 100
answerEl.textContent = `${inStep3}% increase`
})

deButtonEl.addEventListener("click", function(){
      /*decrease*/
let deStep1 = originalEl.value - newEl.value
let deStep2 = deStep1 / originalEl.value
let deStep3 = deStep2 * 100
answerEl.textContent = `${deStep3}% decrease `
})
