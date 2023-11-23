// aside bar start
let ck = document.querySelector('.ck');
let aside = document.querySelector('aside');

ck.addEventListener('click', ()=>{
    aside.classList.toggle('hideshow')
})
// aside bar end

// search bar start
let serc = document.querySelector('.serc');
let search_close_btn = document.querySelector('.search_close_btn')
let search_box = document.querySelector('#search')

serc.addEventListener('click',()=>{
    search_box.style.transform = 'scale(1)'  
})

search_close_btn.addEventListener('click',()=>{
    search_box.style.transform = 'scale(0)'  
})
// search bar end

// product items start
let sopbag = document.querySelector('.sopbag')
let Shopping_close_btn = document.querySelector('.Shopping_close_btn')
let shopping_bag = document.querySelector('.shopping_bag')

sopbag.addEventListener('click', ()=>{
    shopping_bag.style.transform = 'scaleX(1)' 
})

Shopping_close_btn.addEventListener('click', ()=>{
    shopping_bag.style.transform= 'scaleX(0)' 
})
// product items end
