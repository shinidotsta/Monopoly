const button=document.querySelector('#clkme');

var box1=document.querySelector('#box1');
var box2=document.querySelector('#box2');
var box3=document.querySelector('#box3');
var box4=document.querySelector('#box4');
var box8=document.querySelector('#box8');
var box12=document.querySelector('#box12');
var box16=document.querySelector('#box16');
var box15=document.querySelector('#box15');
var box14=document.querySelector('#box14');
var box13=document.querySelector('#box13');
var box9=document.querySelector('#box9');
var box5=document.querySelector('#box5');

var diceRoll=function diceRoll()
 {
     return 1+Math.floor(Math.random()*6); 
 }

 var  diceVal =0;
 var diceVal1=0;
var diceimg=document.querySelector(".dice")


 
 function  ChangePosition(player)
 {
     return (player.position+diceVal)%board.length;
 }
 
 
 function changeMoney(player,position)
 {
    return player.money +=board[position];
 }
 //var board=[100,-10,0,-40,-10,-10,5,0,-10,-50,-10,0]
 var board=[0,100,-10,0,-10,5,-10,-50,-10,0,-10,-40,0]

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
 

 var Cash=1000;



 var arrdiv=[box1,box2,box3,box4,box8,box12,box16,box15,box14,box13,box9,box5,box1];
   var count=0;  
     
 
    function Playgame()
    { 
        count=count+1;
       
        var Cash1=1000;
        if(count%2==0)
        { 
            let a = diceRoll();
            diceVal =diceVal+ a;
 
            


            let template='<img src="red.jpg" id="#img1" alt="red" style="width: 36px;">';
            if(diceVal<17)
            {
                document.querySelector('#img1').style.display="";
                arrdiv[diceVal].innerHTML +=template;
            }
           
    
          //  Cash=parseInt(Cash)-changeMoney(player1,ChangePosition(player1));
            Cash=parseInt(Cash)+board[diceVal];
            console.log(Cash);
            document.querySelector('.item3').innerHTML=Cash;  
        }
      
        else
        {
            let a = diceRoll();
            diceVal1 =diceVal1+ a;
            let template='<img src="blue.jpg" id="#img2" alt="red" style="width: 36px;">';
            if(diceVal1<17)
            {
                document.querySelector('#img2').style.display="";
                arrdiv[diceVal1].innerHTML +=template;
            }
           
    
          //  Cash=parseInt(Cash)-changeMoney(player1,ChangePosition(player1));
            Cash1=parseInt(Cash1)+board[diceVal1];
            console.log(Cash1);
            document.querySelector('.item4').innerHTML=Cash1;  
        }
            
    }    
//call function
button.onclick=Playgame;

