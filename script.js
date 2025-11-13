var inc = document.querySelector('.inc')
var dec = document.querySelector('.dec')
var reset = document.querySelector('.reset')
var h2 = document.querySelector('h2')

var a = 0

inc.addEventListener('click',function(){
    a++ 
    h2.innerHTML = a
})

dec.addEventListener('click',function(){
    a--
    h2.innerHTML = a
})

reset.addEventListener('click',function(){
    a = 0
    h2.innerHTML = a
})


