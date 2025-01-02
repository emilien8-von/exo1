let random = Math.floor(Math.random()*101)
let utilisateur = document.getElementById("input0")
let boutton = document.getElementById("button")


boutton.addEventListener("click",Valider)
function Valider(){
  for (let essai = 10;utilisateur != random; essai--){
    document.getElementById("p3").innerHTML = "Le nombre d'essai est :" + essai
    
   /*  if(utilisateur < random){
       document.getElementById("p2").innerHTML = "Trop bas"
      essai--
    } else if(utilisateur > random) {
     alert("Trop haut")
      essai--
    } else{
      document.getElementById("p2").innerHTML = "bravo"
    }
    if(essai === 1){
      alert("derniere essai")
    }
    if(essai === 0){
      alert("Game over")
       break
    }* */
    
  }
  return utilisateur
}
  /**/