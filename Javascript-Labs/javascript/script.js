//Function to but es degan ijo
function getEsDegan(money)
{
    var amountEsDegan = Math.floor(money / 3000);
    console.log("You will get " + amountEsDegan + " amount of es degan with Rp." + money);
}

getEsDegan(20000);