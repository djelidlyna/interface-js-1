function function4(){
 function taille() {
    let array = [];
    let taille = parseInt(prompt("Donner la taille du tableau"), 10);

    if (isNaN(taille) || taille <= 0) {
      console.log("La taille doit être positive et valide ");
      return array;
    }

    for (let i = 0; i < taille; i++) {
      let x = parseFloat(prompt(`Donner le ${i + 1}e chiffre du tableau`));
      if (!isNaN(x)) {
        array.push(x);
      } else {
        console.log("Chiffre non valide");
        i--;
      }
    }

    return array;
  }


  let tab = taille();

  let som = 0;
  for (let j = 0; j < tab.length; j++) {
    som += tab[j];
  }

  console.log("la somme est "+som);
}
let Btn4=document.getElementById("btn4");
Btn4.addEventListener("click",function4);
