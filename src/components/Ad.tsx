import "./Ad.css";
import React, { useState } from "react";


interface AdProps {
    flavor: string;
    fontSize: number;
    darkTheme: boolean;
}


export default function Ad({flavor, fontSize, darkTheme}:AdProps){


    let addDarkTheme = "";
    
    const styles = {
        fontSize: fontSize + "px"
    }

    if(darkTheme === true){
        addDarkTheme = " dark";
    }

    return(
        <div className = {"Ad" + addDarkTheme} style={styles}>
            <p>Vote For:</p>
            <p>{flavor}</p>
        </div>
    );
}