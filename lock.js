var screen=document.getElementById("bckgnd");
function btnClick(value){
screen.value+=value;
}
function clearScreen(){
    bckgnd.value=" ";
}

function findResult(){
    if(document.getElementById('bckgnd').value!=1234){
        alert('Wrong pin number. Please try again.');
        return false;
    }
    if(document.getElementById('bckgnd').value==1234){
        alert('Login is successful!');
        return true;
    }
}
