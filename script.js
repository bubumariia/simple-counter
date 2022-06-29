const counter = document.querySelector(".counter")
const btn = document.querySelectorAll(".button")
console.log('hello')
let count = 0


btn.forEach(element => {
    element.addEventListener('click', ()=>{
        if(element.classList.contains("decrease")){
            count--
            counter.innerText = count
        }else if(element.classList.contains("reset")){
            counter.innerText = 0
        }else{
            count++
            counter.innerText = count
        }
    })
  
});