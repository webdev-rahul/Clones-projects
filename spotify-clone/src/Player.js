import React from "react";
import "./player.css";
import Sidebar from "./Sidebar.js";
import Body from "./Body";
import Footer from "./Footer.js"

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body />
            </div>
            <Footer />
        </div>
    )
};
export default Player;