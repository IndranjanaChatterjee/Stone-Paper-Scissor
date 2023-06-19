let rand;
const win=document.querySelector(".win");
const user=document.getElementById("uc");
const computer=document.getElementById("cc");
const us=document.getElementById("u");
const cs=document.getElementById("c");
var i=0,j=0;
document.getElementById("0").addEventListener("click",()=>
{
    rand=Math.floor(Math.random()*3);
    console.log(rand);
    if(rand==0)
    {
        win.innerHTML="Its a tie!!";
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
        
    }
    else if(rand==1)
    {
        ++j;
        let e = String.fromCodePoint(0x1F62B);
        
        win.innerHTML=`Oops!! You Loose ${e}`;
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
    }
    else
    {
        ++i;
        let e = String.fromCodePoint(0x1F929);
        win.innerHTML=`Congratulations!! You win ${e}`;
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
    }
    user.innerHTML="Stone";
    get();

})
document.getElementById("1").addEventListener("click",()=>
{
    rand=Math.floor(Math.random()*3);
    console.log(rand);
    if(rand==0)
    {
        ++i;
        let e = String.fromCodePoint(0x1F929);
        win.innerHTML=`Congratulations!! You win ${e}`;
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
        
    }
    else if(rand==1)
    {
        
        win.innerHTML="Oops!! Is a tie";
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
    }
    else
    {
        ++j;
        let e = String.fromCodePoint(0x1F62B);
        
        win.innerHTML=`Oops!! You Loose ${e}`;
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
    }
    user.innerHTML="Paper";
    get();

})
document.getElementById("2").addEventListener("click",()=>
{
    rand=Math.floor(Math.random()*3);
    console.log(rand);
    if(rand==0)
    {
        ++j;
        let e = String.fromCodePoint(0x1F62B);
        
        win.innerHTML=`Oops!! You Loose ${e}`;
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
        
    }
    else if(rand==1)
    {
        ++i;
        
        let e = String.fromCodePoint(0x1F929);
        win.innerHTML=`Congratulations!! You win ${e}`;
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
    }
    else
    {
        
        win.innerHTML="Oops!!Its a tie"
        us.innerHTML=`${i}`;
        cs.innerHTML=`${j}`;
    }
    user.innerHTML="Scissors";
    get();

})
function get()
{
    if(rand==0)
    {
        computer.innerHTML="Stone";
    }
    else if(rand==1)
    {
        computer.innerHTML="Paper";
    }
    else
    {
        computer.innerHTML="Scissors";
    }

}