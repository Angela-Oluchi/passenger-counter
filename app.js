let count = 0;

let incrementEl = document.getElementById("count")  // where the num is increasing
let entriesEl = document.getElementById("entries-el") // the previous entries saved


function increment() {
 incrementEl.textContent = count += 1 
}

function save(){
    let saving = count + "-"
   entriesEl.textContent += saving
   incrementEl.textContent = 0
   count = 0
}

function decrease(){
    incrementEl.textContent = count -= 1 
}
