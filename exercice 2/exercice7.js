function function7(){
    let c=parseInt(prompt("donner le nombre "),10);
 let p=1;
 let row="";
for(var i=1;i<=c*2-1;i++){

for(j=1;j<=p;j++){
    row+= "*";
}
if(c>i){
    p++;
}else{
    p--;
}
console.log(row);
 row="";
}

}
let Btn7=document.getElementById("btn7");
Btn7.addEventListener("click",function7);