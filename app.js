var tabprenom = new Array("Kendrick Lamar - Alright", "Clipse - So Be It", "MF DOOM - Crosshairs", "Kanye West - Spaceship", "JAY Z - Encore","Eminem - Soldier", "Jeezy - Thug Motivation 101", "Drake - Used To");
var res = document.getElementById("resultat");
var btn = document.getElementById("btn")
var load = document.querySelector(".lds-ripple div");

btn.addEventListener('click', function() {
    load.classList.add('active')

    setTimeout(function aleatoire (){
        load.classList.remove("active");
        var rand = Math.floor(Math.random() *8);
        res.innerHTML = `
            <p class="titre"> 🧠 Ton morceau du jour 🧠 </p>
            <p class="nom">🎧 ${tabprenom[rand]} 🎧 </p>
            `;

    }, 3000);
});