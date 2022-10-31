var impure = document.querySelector('.impure');
var pure = document.querySelector('.pure');

impure.addEventListener('onclick', (e) => {
    impure.classList.add("diamonds")
});


var array = [1,'denzel',{name: 'Remi'}]

// for(var i = 0; i < array.length;i++){
// console.log(`i which is ${i} is less than ${array.length}`)
// console.log(array[i])
// }


// var i = 0
// while(i < array.length){
//     var n = 'denzel'
//     if(array[i] == n){
//         console.log(array[i])
//     }
//     else{
//         console.log(`array value ${i} is not denzel`)
//     }
//     i++
// }


array.forEach((element,index) => {
    console.log(`array value ${element} of index ${index} is not denzel`)

});