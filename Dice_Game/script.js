/*jsqk*/
/*var name = 'Mad';
var age = 22;
console.log(name + age);
//var lastname = prompt('What is your Last Name? ');
//console.log(lastname);
//alert('This is an Alert!');
var words = ['john','jane','kayne'];
console.log(words);
var names = ['john',23,23.12];
names.push('teacher');
console.log(names);
names.unshift('Mr');
console.log(names);
names.pop();
console.log(names);
names.shift('MR');
console.log(names);

console.log(names.indexOf('john'));
var john = {
 name: 'john',
 yearofbirth : 1990,

 calculateage : function () {
  return 2016- this.yearofbirth;
 }
};

console.log(john.calculateage());
//alert('Virus!!!')
console.log(names.length);
var x=document.createElement("INPUT");
x.setAttribute("type", "text"); */
var scores,roundScore, activePlayer,gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
if(gamePlaying){
var dice=Math.floor(Math.random()*6)+1;
var diceDOM =document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice_'+dice+'.png';
if(dice!==1){
	roundScore+=dice;
	document.querySelector('#current-'+activePlayer).textContent=roundScore;
}else{
	
	nextPlayer();
	//document.querySelector('.dice').style.dispaly = 'none';
	}
}
});

document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
	scores[activePlayer] += roundScore;
	document.querySelector("#score-"+activePlayer).textContent =scores[activePlayer];
	if(scores[activePlayer]>=100){
		document.querySelector('#name-'+activePlayer).textContent = "Winner!";
		document.querySelector('.dice').style.display ='none';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('#name-'+activePlayer).classList.add('blink');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying=false;
	}else{	
	nextPlayer();

}
}
});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 :activePlayer =0;
	roundScore = 0;

	document.getElementById('current-0').textContent ='0';
	document.getElementById('current-1').textContent ='0';

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
	scores = [0,0];
	roundScore=0;
	activePlayer=0;
	gamePlaying =true;


	//console.log(x);
	//var x =document.querySelector('#score-0').textContent;
	document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent ='0';
	document.getElementById('score-1').textContent ='0';
	document.getElementById('current-0').textContent ='0';
	document.getElementById('current-1').textContent ='0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('#name-0').classList.remove('blink');
	document.querySelector('#name-1').classList.remove('blink');
	document.querySelector('.player-0-panel').classList.add('active');
}