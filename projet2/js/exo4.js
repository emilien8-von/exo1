let random = Math.floor(Math.random()*101)
let essai = 10
let utilisateur = confirm("etes vous pret ? ")
while (utilisateur != random){
  utilisateur = parseInt(prompt("Mettre un nombre entre 1 et 100 inclus :"))
  console.log("le nombre d'essai " + essai)
  
  if(utilisateur < random){
    alert("trop bas")
    essai--
  } else if(utilisateur > random) {
    alert("Trop haut")
    essai--
  } else{
    alert("bravo")
  }
  if(essai === 1){
    alert("derniere essai")
  }
  if(essai === 0){
    alert("Game over")
     break
  }

}