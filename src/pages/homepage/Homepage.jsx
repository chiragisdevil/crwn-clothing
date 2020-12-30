import React from "react";
import "./homepage.style.scss";
import DirectoryMenu from "../../components/directory-menu/DirectoryMenu.jsx";

function Homepage(props){
    return (
        <div className="homepage">
           <DirectoryMenu />
        </div>
    )
}

export default Homepage;