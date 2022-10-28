import React from 'react'

export default function Header(){
    return(
        

        <div>
        <h1>ENTER PIN NUMBER</h1>
        <div className="container"/>
            <form action=""/>
                <input type="text" id="bckgnd"/>
                <br/>
                <br/>
                <input className="button number" type="button" value="7"onclick="btnClick(value)"/>
                <input className="button number" type="button" value="8"onclick="btnClick(value)"/>
                <input className="button number" type="button" value="9"onclick="btnClick(value)"/>
                <br/>
                <br/>
                <input className="button number" type="button" value="4"onclick="btnClick(value)"/>
                <input className="button number" type="button" value="5"onclick="btnClick(value)"/>
                <input className="button number" type="button" value="6"onclick="btnClick(value)"/>
                <br/>
                <br/>
                <input className="button number" type="button" value="1"onclick="btnClick(value)"/>
                <input className="button number" type="button" value="2"onclick="btnClick(value)"/>
                <input className="button number" type="button" value="3"onclick="btnClick(value)"/>
                <br/>
                <br/>
                <input className="button clear" type="button" value="C"onclick="clear()" id="clear"/>
                <input className="button number" type="button" value="0"onclick="btnClk(value)"/>
                <input className="button result" type="button" value="Submit"onclick="Result()"id="submit"/>
            </div>
    )
}