
const click = document.querySelector('.click')
const frame = document.querySelector('.iframe-container')
let i = 1;
click.addEventListener('click', ()=>{
    if(i == 0) {
        frame.style.display = 'none'
        i = 1
    }else if(i == 1){
        frame.style.display = 'block'
        i = 0
    }
})