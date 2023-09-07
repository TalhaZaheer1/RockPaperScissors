function getComputerChoice() {
    let randomN=Math.random();
    if(randomN <= 1/3){
        return 'Rock';
    }else if(randomN <=2/3){
        return 'Paper';
    }else{
        return 'Scissors';
    }
}

const computerSelection = getComputerChoice();
let r = 'ROCK';
let p = 'PAPER';
let s = 'SCISSORS'; 
const score = {
    win : 0,
    lose : 0,
    tie : 0
}; 
const playRound = (playerSelection,computerSelection) => {
    const pS = playerSelection.toUpperCase();
    const cS = computerSelection.toUpperCase();
    if(pS === cS){
        score.tie +=1;
        return 'its a TIE';
    }else if(pS === r && cS === p){
        score.lose += 1;
        return `You lose!.${p} beates ${r}`;
    }else if(pS === r && cS === s){
        score.win += 1;
        return `You WIN!.${r} beats ${s}`;
    }else if(pS === p && cS === r){
        score.win += 1;
        return `You WIN!.${p} beates ${r}`;
    }else if(pS === p && cS === s){
        score.lose += 1;
        return `You Lose!.${s} beats ${p}`;
    }else if(pS === s && cS === p){
        score.win += 1;
        return `You WIN!.${s} beates ${p}`;
    }else if(pS === s && cS === r){
        score.lose += 1;
        return `You Lose!.${r} beats ${s}`;
    }
}
function game(){

    for(let i = 0;i < 5;i++){
        const playerSelection = window.prompt('Enter your choice: ');
        if(playerSelection == null){
            console.log('its aokay if you dont wanna play');
        }
        console.log(playRound(playerSelection,computerSelection));
    }
    console.log(`Score: WINS:${score.win} , LOSES:${score.lose} , TIES:${score.tie}`)
}
game();

