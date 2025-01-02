let random = Math.floor(Math.random()*101)
let utilisateur = document.getElementById("input0")
let form = document.getElementById("form")
let essai = 10
form.addEventListener("submit",Valider)
function Valider(e){
  let value = utilisateur.value 
 /**Bloque le comportement par default */
    e.preventDefault();
  /** Récupère la valeur de l'input **/
    if(value < random){
       document.getElementById("p1").innerHTML = "Trop bas"
       essai--
      
    } else if(value > random) {
     document.getElementById("p1").innerHTML = "Trop haut"
     essai--
      
    } else{
      document.getElementById("p2").innerHTML = "Bravo ! Vous avez trouvé le nombre !"
    }
    document.getElementById("p3").innerHTML = "le nombre d'essai est " + essai
    if(essai == 1) 
    {
       alert("Derniere essai")
    }  
    if (essai == 0 )
    {
      alert("Game Over")
    }
}
let rejouer = document.getElementById("boutton")
rejouer.addEventListener("click",Refaire)
function Refaire(){
  if(essai == 0)
 { 
     let reset = confirm("veux tu réessayer?") 
   if( reset == true)
   {
       essai = 11
       document.getElementById("p3").innerHTML = "le nombre d'essai est " + essai
   }
 } 
  else
  {
    return 0
  }
  
}
