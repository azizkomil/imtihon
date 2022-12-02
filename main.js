
let size1 = document.querySelector("#sizes")
let size = document.querySelector("#size")
let kattaligi = document.querySelector("#kattaligi")
let name1 = document.querySelector("#name")
let number1 = document.querySelector("#number")
let addres1 = document.querySelector("#addres")
let ustuda = document.querySelector("#ustuda")
let ust  = document.querySelector("#ustuda1")
let pul  = document.querySelector("#pul")

// let name = document.querySelector("#username")


function myfun(event){
    const ustida = []
    const add = []
    let sum = 0
    let name = document.querySelector("#username")
    let number = document.querySelector("#usernumber")
    let addres = document.querySelector("#useraddres")
    let pizzasize = document.querySelector("#pizzasize")
    let add1 = document.querySelector("#add")
    let qoshimcha = document.querySelector("#qoshimcha")

    name1.textContent = name.value
    number1.textContent = number.value
    addres1.textContent = addres.value
    size1.textContent = pizzasize.value

    // * Non qandayligi
    if(pizzasize.value==="small"){
        sum = +10000
        
    }
    if(pizzasize.value==="Medium"){
        sum = +15000
        
    }
    if(pizzasize.value==="Big"){
        sum = +20000 
    }
    
    //*Kattaligi
    
    if(size.children[0].children[0].checked){
        kattaligi.textContent = "25 sm"
        sum =sum + 7000
    }
    if(size.children[1].children[0].checked){
        kattaligi.textContent = "30 sm" 
         sum = sum+ 8000
    }
    if(size.children[2].children[0].checked){
        kattaligi.textContent = "35 sm"
        sum = sum+ 9000
    }
    
    
    // * Ustudagilari
    
    if(ustuda.children[0].children[0].checked){
        ustida.push(ustuda.children[0].children[0].value)
    }
    if(ustuda.children[1].children[0].checked){
        ustida.push(ustuda.children[1].children[0].value)
    }
    if(ustuda.children[2].children[0].checked){
        ustida.push(ustuda.children[2].children[0].value)
    }
    if(ustuda.children[3].children[0].checked){
        ustida.push(ustuda.children[3].children[0].value)
    }
    if(ustuda.children[4].children[0].checked){
        ustida.push(ustuda.children[4].children[0].value)
    }
    if(ustuda.children[5].children[0].checked){
        ustida.push(ustuda.children[5].children[0].value)
    }
    
    // *  Qo`shimcha
    
    if(add1.children[0].children[0].checked){
        add.push(add1.children[0].children[0].value)
    }
    if(add1.children[1].children[0].checked){
        add.push(add1.children[1].children[0].value)
    }
    
    
    
    sum = sum + (ustida.length*5000)
    sum = sum + (add.length*4000)
    
   
    
    ust.textContent = ustida
    qoshimcha.textContent = add
    pul.textContent = sum
    
    
}
