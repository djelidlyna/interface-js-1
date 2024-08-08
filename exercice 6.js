 function function6(){
    let n = parseInt(prompt("entrer le nombre "), 10);

    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
let Btn6=document.getElementById("btn6");
Btn6.addEventListener("click",function6);

