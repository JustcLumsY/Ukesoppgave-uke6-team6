function start() {

    app.classList.add("body");
    

    html = `<div class="loader-wrapper">
    <span class="loader"><span class="loader-inner"></span></span>
    </div>`;
    updateView();

    
    //Will wait for x amount of millisec before running whatever is
    //inside the setTimeout function
    setTimeout(function()
    {        
        html = `
        <div class="background3">
        <button class="BtnCourtY" onclick="fight()">Fight</button>
        <button class="BtnCourtY" onclick="shop()">Shop</button><br/>
        <img class="shopIcon" src="shopIcon.png" alt="shopIcon width="65px" height="65px">
        <img class="fightIcon" src="fightIcon.png" alt="fightIcon width="65px" height="75px">
        
              
        </div>
        `;
        updateView();
    }, 1000);
}

function shop() {
    html = `
    <div class="background2">
    <button class="gameBtn gameBtns">Buy HP potions</button>
    <button class="gameBtn gameBtns">Buy damage</button>
    <button class="gameBtn gameBtns">Buy maximum HP</button>
    <button class="gameBtn gameBtns" onclick="start()">Courtyard</button><br/>
    <img class="hp" src="hp_potion.png" alt="hp_potion width="65px" height="65px">
    <img class="sword" src="swords.png" alt="hp_potion width="65px" height="65px">
    <img class="maximumhp" src="maximumhp.png" alt="maximumhp width="65px" height="75px">
    <img class="arrowleft" src="arrowleft.png" alt="arrowleft width="65px" height="75px">
    <img class="Untitled" src="Untitled.png" alt="Untitled width="65px" height="15px">
    </div>
    `;
    updateView();
}



function fight(){

    html = `
        <div class="background1">
            <button class="gameBtn gameBtns" onclick="attack()">Attack</button>
            <button class="gameBtn gameBtns" onclick="run()">Run</button>
            <button class="gameBtn gameBtns"></button>
            ${player.name} HP: ${player.hp}    ${enemy.name} HP: ${enemy.hp}</p>
        </div>
    `;
    updateView();
}

function attack(){
    enemy.hp != 0 ? enemy.hp = enemy.hp - player.dmg: "";
    fight();
    updateView();
}

// function enemyAttack() {
//     let success = Math.floor(Math.random() * 100);
//     success >= 80 ? fight() : => {
//         player.hp -= enemy.dmg;
//         fight();
//     };
// }

function run(){
    let success = Math.floor(Math.random() * 100);
    success >= 95 ? start() : enemyAttack();
}

function subtractDmg(recipiant,reciever){
    reciever.hp -= recipiant.dmg;
    fight();
}
