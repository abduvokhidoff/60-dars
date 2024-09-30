// DOM - document Object Module
// BOM - Browser Object Module

// let text_p = document.querySelector('.wrapper_child')

// console.log(text_p);

// text_p.style.color = 'red'

// let input_c = document.querySelector('.input_color')

// let body = document.querySelector('body')

// input_c.addEventListener('input', () => { 
//     body.style.background = input_c.value
// })

// let name = 'Behruz'

// let buttons = document.querySelectorAll('button')

// let hello = document.querySelector('.Hello')

// let body = document.querySelector('body')

// let input_c = document.querySelector('.color')

// hello.style.display = 'none'

// buttons[0].addEventListener('click', ()=>{
//     hello.style.display ='block'
// })

// buttons[1].addEventListener('click', ()=>{
//     hello.style.display = 'none'
// })

// buttons[2].addEventListener('click', ()=>{
//     hello.style.color = 'red'
// })

// buttons[3].addEventListener('click', ()=>{
//     hello.style.color = 'blue'
// })

// input_c.addEventListener('input', ()=>{
//     body.style.background = input_c.value
// })

//hello.textContext = name
let div = document.querySelector('.div')

let p = document.querySelector('.p')
let p_1 = document.querySelector('.p_1')
let p_2 = document.querySelector('.p_2')

p.style.display = ' none'

p_1.style.display = 'none'

p_2.style.display = 'none'

div.style.display = 'none'

let name = prompt('Ismingizni Kiriting!')

let surname = prompt('Familiyangizni Kiriting!')

let age = prompt('Yoshingizni Kiriting!')

let name_1 = `Ism: ${name}`

let surname_1 = `Familiya: ${surname}`

let age_1 = `Yosh: ${age}`

let name_2 = (name_1.toUpperCase())
let surname_2 = (surname_1.toUpperCase())
let age_2 = (age_1.toUpperCase())
let result = confirm('Sozingizni hariflari kattadan bolsinmi?')




if (result){
p.style.display = 'block'
p_1.style.display = 'block'
p_2.style.display = 'block'
p.style.color= 'white'
p_1.style.color = 'white'
p_2.style.color = 'white'
p.textContent = name_2
p_1.textContent = surname_2
p_2.textContent = age_2
div.style.display = 'block'
div.style.background = 'black'
div.style.width = '300px'
div.style.height = '150px'
div.style.display = 'flex'
div.style.flexDirection = 'column'
div.style.alignItems = 'center'
div.style.justifyContect ='center'
div.style.borderRadius = '20px'
}

else{
    p.style.display = 'block'
p_1.style.display = 'block'
p_2.style.display = 'block'
p.style.color= 'white'
p_1.style.color = 'white'
p_2.style.color = 'white'
p.textContent = name_1
p_1.textContent = surname_1
p_2.textContent = age_1
div.style.display = 'block'
div.style.background = 'black'
div.style.width = '300px'
div.style.height = '150px'
div.style.display = 'flex'
div.style.flexDirection = 'column'
div.style.alignItems = 'center'
div.style.justifyContect ='center'
div.style.borderRadius = '20px'
}