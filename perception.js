var counter=var1;
function disablebutton()
{
    if(counter===1)
    {
         document.getElementById("p").disabled=true;
    }
}

function enableit()
{
    if(counter===0)
    {
         document.getElementById("p").disabled=false;
    }            
}
