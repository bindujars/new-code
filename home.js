//{/*import React from 'react';*/}


//{/*class Home extends React.Component{render(){*/}

// import "../"

function Home(){
   // function myfn(){

var screen=document.getElementById("bckgnd");
function btnClk(value){
// screen.value+=value;\
console.log(value);
}
function clear(bckgnd){
    // bckgnd.value=" ";
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
     return (
            
        <div>
            <h1>ENTER PIN NUMBER</h1>
   < div class="container">
        <form action="">
            <input type="text" id="bckgnd"/>
            <br/>
            <br/>
            <input class="button number" type="button" value="7"onclick={btnClk}/>
            <input class="button number" type="button" value="8"onclick={btnClk}/>
            <input class="button number" type="button" value="9"onclick={btnClk}/>
            <br/>
            <br/>
            <input class="button number" type="button" value="4"onclick={btnClk}/>
            <input class="button number" type="button" value="5"onclick={btnClk}/>
            <input class="button number" type="button" value="6"onclick={btnClk}/>
            <br/>
            <br/>
            <input class="button number" type="button" value="1"onclick={btnClk}/>
            <input class="button number" type="button" value="2"onclick={btnClk}/>
            <input class="button number" type="button" value="3"onclick={btnClk}/>
            <br/>
            <br/>
           <input class="button clear" type="button" value="C"onclick={clear()} id="clear"/>
            <input class="button number" type="button" value="0"onclick={btnClk}/>
            <input class="button result" type="button" value="Submit"onclick={Result()} id="submit"/>
    
        </form>
        </div>
        </div>
    
    );
     }

export default Home