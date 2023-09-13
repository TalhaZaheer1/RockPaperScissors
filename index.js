function getComputerChoice() {
    let randomN=Math.random();
    if(randomN <= 1/3){
        return 'Rock';
    }else if(randomN <=2/3){
        return 'Paper';
    }else{
        return 'Scissors';
    }
};
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
};
const game = document.querySelector('.game');
const buttons = document.querySelectorAll('button');
const scoreDiv = document.createElement('div');
const divP1 = document.createElement('p');
const divP2 = document.createElement('p');
const divP3 = document.createElement('p');
game.appendChild(scoreDiv);
scoreDiv.appendChild(divP1);
scoreDiv.appendChild(divP2);
scoreDiv.appendChild(divP3);
let ctr = 0;
function playGame(){

    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    let res = playRound(playerSelection,computerSelection);
    divP1.textContent = res;
    ctr++;
    divP2.textContent = `WINS: ${score.win} , LOSES: ${score.lose} , TIES: ${score.tie}`;
    
    if(ctr == 5){
        if(score.win > score.lose && score.win > score.tie){
            divP3.textContent = 'YOU WON';
        } else if (score.lose == score.win){
            divP3.textContent = 'YOU TIED'
        }else if(score.lose > score.tie){
            divP3.textContent = 'YOU LOST';
        }  else{
            divP3.textContent = 'YOU TIED'
        }
        [score.win , score.lose , score.tie] = [0 , 0 , 0];
        ctr = 0;
    }
        
};
buttons.forEach(btn => btn.addEventListener('click' , playGame));

