import React, { useState } from "react";
import "./AdDesigner.css";

function AdDesigner() {
    const [flavor, setFlavor] = useState<string>("Strawberry");
    const [color, setColor] = useState<string>("Light");
    const [Fontsize, setFontsize] = useState<number>(24);

    function Sizehandler (change:number) {
        setFontsize(Fontsize + change );
    }
    
    return (
        <div className="AdDesigner">
            <h2>AdDesigner</h2>
            <div className={"ad-container " + color} >
                <p>Vote for:</p>
                <p>{flavor}</p>
            </div>
            <div>
                <p>What to support:</p>
                <button onClick={() => setFlavor("Chocolate")}>Chocolate</button>
                <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
                <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            </div>
            <div>
                <p>Color Theme</p>
                <button onClick={() => setColor("Light")}>Light</button>
                <button onClick={() => setColor("Dark")}>Dark</button>
            </div>
            <div>
                <p>Font Size</p>
                <button onClick={() => Sizehandler(-1)}>Down</button>
                <p>{Fontsize}</p>
                <button onClick={() => Sizehandler(+1)}>Up</button>
            </div>
        </div>
    );
}

export default AdDesigner;