
var ranNum=Math.floor(Math.random()*100)+1;

function checkGuess()
{
    
    // get number from the input box
    var num=document.getElementById("input").value;
    
    num=parseInt(num);

    if(num==ranNum)
    {
       document.getElementById("output").innerHTML="You guessed it right!";
    }
    else if(num>ranNum)
    {
        document.getElementById("output").innerHTML="You guessed it too high!";
    }
    else
    {
        document.getElementById("output").innerHTML="You guessed it too low!";
    }

}

function newGame()
{
    ranNum=Math.floor(Math.random()*100)+1;
    document.getElementById("output").innerHTML="";
    document.getElementById("input").value="";
}
