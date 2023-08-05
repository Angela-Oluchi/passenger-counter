let count = 0;

let incrementEl = document.getElementById("count")

function increment() {
 incrementEl.textContent = count += 1 
}

let entriesEl = document.getElementById("entries-el")

// console.log(entriesEl)
function save(){
    let addition = count + "-"
   entriesEl.textContent += addition
   incrementEl.textContent = 0
   count = 0
}
