import React, { useState } from "react";
import Ad from "./Ad";
import "./AdDesigner.css";

function AdDesigner() {
    const [flavor, setFlavor] = useState<string>("Strawberry");
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [Fontsize, setFontsize] = useState<number>(24);

    function Sizehandler (change:number) {
        setFontsize(Fontsize + change );
    }
    
    return (
        <div className="AdDesigner">
            <Ad flavor = {flavor} fontSize = {Fontsize} darkTheme = {darkTheme}></Ad>
            <div>
                <p>What to support:</p>
                <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
                <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
                <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            </div>
            <div>
                <p>Color Theme</p>
                <button onClick={() => setDarkTheme(false)}>Light</button>
                <button onClick={() => setDarkTheme(true)}>Dark</button>
            </div>
            <div>
                <p>Font Size</p>
                <button onClick={() => Sizehandler(+1)}>Up</button>
                <p>{Fontsize}</p>
                <button onClick={() => Sizehandler(-1)}>Down</button>
            </div>
        </div>
    );
}

export default AdDesigner;