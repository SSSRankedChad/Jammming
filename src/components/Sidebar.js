import React from 'react';  

const Sidebar = () => {

    const darkMode = () => {
        let element = document.body;
        element.classList.toggle("dark")
        let originalText = document.querySelector('#darkBtn');
        if(originalText.innerHTML === "Dark Mode") {
          originalText.innerHTML = "Light Mode";
        }
        else {
          originalText.innerHTML = "Dark Mode";
        }
    }

  return (
    <div className="Sidebar">
        <button> <a href="https://accounts.spotify.com/en/login"> Login </a></button> &nbsp;
        <button id="darkBtn" onClick={darkMode}> Dark Mode </button> &nbsp;
        <button>Options</button>
    </div>
  )
}

export default Sidebar;