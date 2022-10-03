import { setUncaughtExceptionCaptureCallback } from "process";
import React, { useState } from "react";

export default function Votes() {
    const [flavor, setFlavor] = useState<string>("Strawberry");
    let [totalVotes, setTotalVotes] = useState(0);
    let [chocolateVotes, setChocolateVotes] =useState(0);
    let [vanillaVotes, setVanillaVotes] = useState(0);
    let [strawberryVotes, setStrawberryVotes] = useState(0);
    let [chocolatebar, setChocolateBar] = useState(0);
    let [vanillabar, setVanillaBar] = useState(0);
    let [strawberrybar, setStrabberyBar] =useState(0);
    
   function addVotes(vote: string) {
       if(vote === "Chocolate"){
           setChocolateVotes(chocolateVotes + 1);
       } else if (vote === "Vanilla"){
           setVanillaVotes(vanillaVotes + 1);
       } else if (vote === "Strawberry"){
           setStrawberryVotes(vanillaVotes + 1);
       }
   }

    function handleVotes(vote:string){
        addVotes(vote);
        setTotalVotes(totalVotes + 1);
        setFlavor(vote);
    }

    return (
        <div className="Votes">
            <p>Vote Here</p>
            <button onClick={() => handleVotes("Chocolate")}>Chocolate</button>
            <button onClick={() => handleVotes("Vanilla")}>Vanilla</button>
            <button onClick={() => handleVotes("Strawberry")}>Strawberry</button>
            <div className="ad-container">
                <p>Vote for:</p>
                <p>{flavor}</p>
                <p>{totalVotes}</p>
            </div>
            <div>
                {totalVotes === 0 && <span>No Votes Yet</span>}
                {totalVotes > 0 && <div>
                        <p>Chocolate: {chocolateVotes} ({((chocolateVotes) / (totalVotes) * 100).toFixed(1)}%)</p>
                        <div className="chocolateBar"></div>
                        <p>Vanilla: {vanillaVotes} ({((vanillaVotes) / (totalVotes) * 100).toFixed(1)}%)</p>
                        <div className="vanillaBar"></div>
                        <p>Strawberry: {strawberryVotes} ({((strawberryVotes) / (totalVotes) * 100).toFixed(1)}%)</p>
                        <div className= "strawberryBar"></div>
                    </div>
                }
            </div>
        </div>
    )
}