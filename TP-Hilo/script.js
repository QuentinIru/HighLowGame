  let sol = Math.floor(Math.random()*1000)+1;
  let div = document.querySelector("div");
  let bouton = document.querySelector("button");
  let n = 0;
  let paragraphes = document.querySelectorAll("p");
  bouton.addEventListener("click", function(){
      let input = document.getElementById("answer").value;
      let p = document.createElement("p");
      let nombre = parseInt(input);
      if(!input){
          p.textContent = "Veuillez entrer un nombre";
      }
      else if(isNaN(input)){
          p.textContent = "Veuillez entrer un nombre";
      }
      else if(nombre>1000 || nombre<1){
          p.textContent = "Vous n'avez pas entré un nombre entre 1 et 1000";
      }
      else if(nombre==sol){
          p.textContent = `${sol} Bravo tu as trouvé le bon nombre :)`;
          n+=1;
          paragraphes[2].textContent = `Vous avez trouvé en ${n} essais`;
          bouton.textContent="Retry ?";
          bouton.addEventListener("click", function (){
               window.location.reload();
          })
      }
      else if(nombre<sol){
          p.textContent = `Le nombre est plus GRAND que ${nombre}`;
          n+=1;
          paragraphes[2].textContent = `Nombre d'essais : ${n}`
      }
      else{
          p.textContent = `Le nombre est plus PETIT que ${nombre}`;
          n+=1;
          paragraphes[2].textContent = `Nombre d'essais : ${n}` 
      }
      div.append(p);
  })