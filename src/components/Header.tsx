import "./Header.css";
import React from "react";

interface HeaderProps {
    user:string;
}

 function Header(user:HeaderProps) {
    return (<div className="Header">
        <h1>Ice Cream Wars</h1>
        <p>Welcome {user.user} </p>
    </div>
    )
}

export default Header;