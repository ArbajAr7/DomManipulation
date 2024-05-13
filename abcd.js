let countnumber = parseInt(document.getElementById('currentcountNumber').innerHTML);

function Increment() {  
    countnumber = countnumber+1;
    if(countnumber>0)
        {
            document.getElementById('clearbtn').style.display = "inline";
            document.getElementById('currentcountNumber').innerHTML = countnumber;
            document.getElementById('decrementbtn').style.backgroundColor = "white";
            document.getElementById('error').style.display = "none";
        }
}

function Decrement() {
    countnumber = countnumber-1;
    if(countnumber == 0)
        {
            document.getElementById('clearbtn').style.display = "none";
            document.getElementById('decrementbtn').style.backgroundColor = "grey";
            document.getElementById('error').style.display = "none";
        }
    if(countnumber<0)
        {
            document.getElementById('error').style.display = "inline";
            countnumber=0;
            document.getElementById('decrementbtn').style.backgroundColor = "grey";
        }
    if(countnumber>=0) 
        {
            document.getElementById('currentcountNumber').innerHTML = countnumber;
        }

}

function Clear() {
    countnumber=0;
    document.getElementById('currentcountNumber').innerHTML = countnumber;
    document.getElementById('clearbtn').style.display = "none";
    document.getElementById('decrementbtn').style.backgroundColor = "grey";
    document.getElementById('error').style.display = "none";
    
}

document.getElementById('incrementbtn').addEventListener("click",Increment);
document.getElementById('decrementbtn').addEventListener("click",Decrement);
document.getElementById('clearbtn').addEventListener("click",Clear);