  function function5(){
    function taille(){
        let array=[]
        let t = parseInt(prompt("donner la taille du tableau"),10);
      if(isNaN(t) || t <=0){
         console.log("la taille doit etre positife et valide");
         return array;
      }
      for(var i=0;i<t;i++){
         let x=prompt(`donner le ${i+1}e element du tableau`);
         array.push(x);
      }
      return array;
      }
     
      let tab=taille();
       console.log("voici le tableau des string:"+tab);
       for( var i=0;i<tab.length;i++){     console.log("la taille de l'element numero "+(i+1)+"est:"+tab[i].length)
      }
  }
 let Btn5=document.getElementById("btn5");
 Btn5.addEventListener("click",function5);
 