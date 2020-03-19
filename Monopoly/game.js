
// var board=[100,-10,0,-40,-10,-10,5,0,-10,-50,-10,0] 

// var diceRoll=()=> {return 1+Math.floor(Math.random()*6);  }

// class player
// {
//     constructor(name,position,color,money)
//     {   
//         this.name=name;
//         this.position=position;
//         this.money=money;
//         this.color=color;
//     }
    

// }
// nextTurn()
//  {
//      this.position=(this.position+diceRoll())%board.length;
//      this.money=this.money+board[this.position];
//  }
// var player1=new player("venkat",0,"blue",1000);


  var diceRoll=function diceRoll()
 {
     return 1+Math.floor(Math.random()*6); 
 }
 
 
 function  ChangePosition(player,diceRoll)
 {
    

     return (player.position+diceRoll)%board.length;
 
 }
 
 
 function changeMoney(player,position)
 {
    return player.money +=board[position];
 }

//-----------------------players--------------



var board=[100,-10,0,-40,-10,-10,5,0,-10,-50,-10,0]

var player1={
name:"Priyanshu",
color:"red",
money:1000,
position:0
}

var player2={
    name:"Kannam",
    color:"blue",
    money:1000,
    position:0  
    }

    var player3={
        name:"shini",
        color:"grey",
        money:1000,
        position:0  
        }


console.log(changeMoney(player1,ChangePosition(player1,diceRoll())));






//console.log(changeMoney(player2,ChangePosition(player2,diceRoll())));
//console.log(changeMoney(player2,ChangePosition(player2,diceRoll())));

//player 1 rolls the dice
// ChangePosition(player1,diceRoll)
// var positionNew=player1.position;
// changeMoney(player1,positionNew);
// console.log(player1);



// // //player 2 rolls the dice
// // ChangePosition(player2,diceRoll)
// // var positionNew=player2.position;
// // changeMoney(player2,positionNew);
// // //console.log(player2);

// // //player 3 rolls the dice
// // ChangePosition(player3,diceRoll)
// // var positionNew=player3.position;
// // changeMoney(player3,positionNew);













//         //player 1 rolls the dice
//         // var diceRoll=1+Math.floor(Math.random()*6)  //getting random no

//         //  var newPosition=(player1.position+diceRoll)%board.length
//         //   // console.log(diceRoll,newPosition);

//         //  var NewCashPosition=player1.money+ board[newPosition];

//         //  player1.money=NewCashPosition;
//         //  player1.position=newPosition;


//    ////player 2 rolls the dice
