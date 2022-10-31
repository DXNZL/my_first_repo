var scndttl= document.querySelector( ".secondtitle");
var links= document.querySelectorAll( ".link");


console.log(scndttl);


// scndttl.addEventListener("mouseover", ()=>{
//     scndttl.classList.add("liks"); 
// });

// scndttl.addEventListener("mouseleave", () =>{
//     scndttl.classList.remove("liks");
// });

links.forEach((element,index) => {
    if(index == 0){
        element.addEventListener("mouseover", () => {
            element.classList.add('liksone');
           });
    } 
    else if(index == 1){
        element.addEventListener("mouseover", () => {
            element.classList.add('likstwo');
           });
    } 
    else if(index == 2){
        element.addEventListener("mouseover", () => {
            element.classList.add('liksthree');
           });
    } 

    else{
        element.addEventListener("mouseover", () => {
            element.classList.add('liks');
           });
    }
   
}); 

links.forEach((element,index) => {
    if(index == 0){
        element.addEventListener("mouseleave", () => {
            element.classList.remove('liksone');
           });
    } 
    else if(index == 1){
        element.addEventListener("mouseleave", () => {
            element.classList.remove('likstwo');
           });
    } 
    else if(index == 2){
        element.addEventListener("mouseleave", () => {
            element.classList.remove('liksthree');
           });
    } 

    else{
        element.addEventListener("mouseleave", () => {
            element.classList.remove('liks');
           });
    }
});
   

links.forEach( (element,index)=>
{element.addEventListener("mouseleave", () => {element.classList.remove('liks'); });
});



