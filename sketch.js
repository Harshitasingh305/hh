var canvas;
 var gameState=0;
 var contestantCount, database, quiz, question,contestant 

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz1=new Quiz()
  quiz1.start()
  quiz1.getState()
}


function draw(){
  background("pink");
if(contestantCount===4){
	game.update(1)
	 
}	

  
}
