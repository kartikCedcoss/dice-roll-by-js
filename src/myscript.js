function rolldice(){
    var frandomNum = Math.floor(Math.random()*6+1);
    var myDice1 = "<tr><td><img src='image/dice"+frandomNum+".png'</td></tr>";
    document.getElementById('dice1').innerHTML =myDice1;

    var srandomNum = Math.floor(Math.random()*6+1);
    var myDice2 = "<tr><td><img src='image/dice"+srandomNum+".png'</td></tr>";
    document.getElementById('dice2').innerHTML =myDice2;

    if(frandomNum > srandomNum){
        document.getElementById('winmsg').innerHTML="Winner is User 1";
    }
    else if(frandomNum < srandomNum) {
        document.getElementById('winmsg').innerHTML="Winner is User 2";
    }
    else{
        document.getElementById('winmsg').innerHTML="This is a Draw";
    }
}