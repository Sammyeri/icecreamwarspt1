import "./Votes.css";
import React, { useState } from "react";

export default function Votes() {
    const [flavor, setFlavor] = useState<string>("Strawberry");
    let [totalVotes, setTotalVotes] = useState(0);
    let [chocolateVotes, setChocolateVotes] =useState(0);
    let [vanillaVotes, setVanillaVotes] = useState(0);
    let [strawberryVotes, setStrawberryVotes] = useState(0);

    let chocolateStyles = {
        width: ((chocolateVotes) / (totalVotes) * 100).toFixed(1) + "%",
    }

    let vanillaStyles = {
        width: ((vanillaVotes) / (totalVotes) * 100).toFixed(1) + "%",
    }

    let strawberryStyles = {
        width: ((strawberryVotes) / (totalVotes) * 100).toFixed(1) + "%",
    }
    
   function addVotes(vote: string) {
       if(vote === "Chocolate"){
           setChocolateVotes(chocolateVotes + 1);
       } else if (vote === "Vanilla"){
           setVanillaVotes(vanillaVotes + 1);
       } else if (vote === "Strawberry"){
           setStrawberryVotes(strawberryVotes + 1);
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
            <div>
                {totalVotes === 0 && <span>No Votes Yet</span>}
                {totalVotes > 0 && <div>
                        <p>Chocolate: {chocolateVotes} ({((chocolateVotes) / (totalVotes) * 100).toFixed(1)}%)</p>
                        <div className="chocolateBar" style={chocolateStyles}></div>
                        <p>Vanilla: {vanillaVotes} ({((vanillaVotes) / (totalVotes) * 100).toFixed(1)}%)</p>
                        <div className="vanillaBar" style={vanillaStyles}></div>
                        <p>Strawberry: {strawberryVotes} ({((strawberryVotes) / (totalVotes) * 100).toFixed(1)}%)</p>
                        <div className= "strawberryBar" style={strawberryStyles}></div>
                    </div>
                }
            </div>
        </div>
    )
}