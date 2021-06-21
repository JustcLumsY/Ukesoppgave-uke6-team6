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

function fight() {
    
    html = `
        <div class="background1">
            <button class="BtnCourtY" onclick="attack()">Attack</button>
            <button class="BtnCourtY" onclick="run()">Run</button>
            <!-- <button class="gameBtn gameBtns"></button> -->
            <p class="Enemy">${enemy.name}'s</p> </br>
            <p class="EnemyHealth"> HP: ${enemy.hp}</p>
            <p class="Status">${status}</p>
            <img class="attackicon" src="attackicon.png" alt="attackicon width="65px" height="85px">
            <img class="RunningIcon" src="RunningIcon.png" alt="RunningIcon" width="65px" height="85px">
            <p class="Player">${player.name}'s</p> 
            <p class="PlayerHealth"> HP: ${player.hp}</p>
          
        </div>
    `;
    checkWin();
    
}

function lost() {
    // alert("Ling Ting Tong died!"); 
    let text = `
         <div class="lostSite">
         You lose! <button class="gameBtn youLose" onclick="youLost()">back</button>
         <h1> You got SUCKED into the void! </h1>
         ${player.hp}
         </div>
    `;
     return text;     
}

// Welcome to the spaghetti zone!

function attack(){
    if(!canContinue()) return;

    crit = Math.floor(Math.random() * 10);
    crit >= 7 ? playerCrit():
    enemy.hp != 0 ? enemy.hp = enemy.hp - player.dmg: '';
    npcAttack();
}

function playerCrit(){
    enemy.hp -= player.dmg * 2;
    status = `${player.name} crit!`;
    updateView();
}

function run(){
    if(!canContinue()) return;

    let success = Math.floor(Math.random() * 100);
    success >= 95 ? start() : npcAttack();
}

function npcAttack() {
    let success = Math.floor(Math.random() * 100);
    if (enemy.hp != 0){
    success <= 70 ? fightClearStatus() : status = `${enemy.name} missed!`;
    updateView();
    fight();
    }
    if (player.hp <= 0){
        checkWin();
    }
    updateView();
    fight();
}

function subtractDmg(giver,reciever){

    if(reciever.hp - giver.dmg < 0){
        reciever.hp = 0;
    }
    else{
        reciever.hp -= giver.dmg;
    }
    
    updateView();
    fight();
}

function checkWin() {
    // if(win || lose) return;
    
    if(player.hp > 0 && enemy.hp <= 0){
        status = `You win! <button class="gameBtn gameBtns" onclick="fightBack()">back</button>`;
        win = true;
        
    }
    if (player.hp <= 0) {
        player.hp = 0;
        // status = `You lose! <button class="gameBtn gameBtns" onclick="start()">back</button>`;
        html = lost();
        lose = true;
        // reset();
    }
    updateView();
}

function fightBack(){
    if (player.hp == 0) player.hp = player.maxHp;
    if (enemy.hp <= 0) enemy.hp = enemy.maxHp;
    start();
}

function fightClearStatus(){
    subtractDmg(enemy, player);
    status = '';
}

function reset(){
    //game ends, reset variables
    win = false;
    lose = false;

    //reset players
    player.hp = player.maxHp;
    enemy.hp = enemy.maxHp;
}

function canContinue(){
    if(win || lose) return false;
    return true;
}

function youLost(){
    reset();
    start();
}
