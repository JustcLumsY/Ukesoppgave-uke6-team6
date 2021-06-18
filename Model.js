let app = document.getElementById('app');
let html ='';

var player = {
    name: "ling ting tong",
    hp: 100,
    dmg: 50
}
var npc;

let enemy = {
    name: "tore",
    hp: 300,
    maxHp: 300,
    dmg: 30
}
// var spriteSheet = new createjs.SpriteSheet({
//     framerate: 30,
//     "images": [loader.getResult("player")],
//     "frames":{
//         "width": 110,
//         "regY": 0,
//         "height": 104,
//         "regX": 55,
//         "count": 188
//     },
//     // define two animations, run (loops, 1.5x speed) and jump (returns to run):
//     //Levi is my character's name	
//     "animations":{
//         "Melee": [124, 145, "Ready"],
//         "Damage": [146, 155, "Ready"],
//         "Running": [95, 123, "LeviRunCycle"],
//         "LeviRunCycle": [100, 123, "LeviRunCycle"],
//         "LeviWalk": [0, 24, "LeviWalkCycle"],
//         "LeviWalkCycle": [4, 24, "LeviWalkCycle"],
//         "Tired": [25, 44],
//         "Miss": [166, 187, "Ready"],
//         "Dodge": [156, 165, "Ready"],
//         "Ready": [45, 94, "Ready"],
//         "TakeHit": [45, 57, "Damage"],
//         "Parry": [45, 58, "Dodge"]
//     }
// });

// var player1 = {
//     name:"Kahoona",
//     level: 1,
//     str: 5,
//     dex: 3,
//     int: 2,
//     end: 4,
//     hp: 1,
//     eSprite: player //the sprite
//   };
//   var enemy1 = {
//     name:"Enemy1",
//     level: 1,
//     str: 4,
//     dex: 3,
//     int: 2,
//     end: 6,
//     hp: 1, 
//     eSprite: npc //sprite
//   }
