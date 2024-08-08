
 function function2(){
    let x=prompt("entrer un numreo");
let number=parseInt(x,10);
if(isNaN(number)){
    console.log("cest pas un numero")
}else{
console.log("les numero paires de 1 a "+number+"sont:");
for(var i=1;i<=x;i++){
    if(i%2==0){
        console.log(i);
    }
}
}
}
let Btn2=document.getElementById("btn2");
Btn2.addEventListener("click",function2);
