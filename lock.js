var screen=document.getElementById("bckgnd");
function btnClk(value){
screen.value+=value;
}
function clear(){
    bckgnd.value=" ";
}

function Result(){
    if(document.getElementById('bckgnd').value!=1234){
        alert('Wrong pin number. Please try again.');
        return false;
    }
    if(document.getElementById('bckgnd').value==1234){
        alert('Login is successful!');
        return true;
    }
}
