let endpoint ="https://api.api-onepiece.com/characters";
let div = document.getElementById("perso");
fetch(endpoint)
    .then(reponse => reponse.json())
    .then(res => {
        div.innerHTML = res[0].french_name + ' ' + res[0].age;
    })

let endpoint2 ="https://api.api-onepiece.com/characters/crew";
let div2 = document.getElementById("crew");
fetch(endpoint)
    .then(reponse => reponse.json())
    .then(res => {
        div2.innerHTML = res[0].crew["id" === 0].french_name;
    })

