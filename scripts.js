
$(document).ready(function() {
    
    var friends = ["Sarah", "Alice", "Ben", "Dylan", "Aster"];
    var locations = ["Foyer", "Garden", "Library", "Study", "Dining Room", "Kitchen", "Basement", "Bedroom", "Ballroom", "Bathroom"];
    var weapons = ["Lead Pipe", "Rope", "Pipe Wrench", "Candlestick", "Revolver", "Knife", "Toothpick", "Heavy Book", "40 Ton Weight", "Chair Leg", "Spork", "Cleaver", "Frying Pan", "Suspiciously Pointy Stick", "Screwdriver", "Saw", "Vase", "Hammer", "Fork", "Rubber Mallet"];
    
    
     
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }
        
    function initialCreation() {
     
        
        function createList() {for(var i = 1; i<101; i++) { 
        var accuseHead = document.createElement("h3");
        var accuseText = document.createTextNode("Accusation " + i);
        accuseHead.appendChild(accuseText);
        var randomFriend = randomNum(0, 4);
        var randomLoc = randomNum(0, 9);
        var randomWeapon = randomNum(0, 19);
        var friendName = friends[randomFriend];
        var locationName = locations[randomLoc];
        var weaponName = weapons[randomWeapon];
        accuseHead.id = ("Accusation " + i + ": I accuse " + friendName + ", with the " + weaponName + " in the " + locationName + "!")
        document.body.appendChild(accuseHead);
           }}

        return createList;
    }

var pageLoad = initialCreation();
pageLoad();
$(document).on('click', 'h3', function() {
    alert(this.id);
})


})