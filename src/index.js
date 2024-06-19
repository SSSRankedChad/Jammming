import React from 'react';
import {createRoot} from 'react-dom/client'
import Jammming from "../src/components/Jammming.js"
import "../src/index.css"

const container = document.getElementById("root");
const root = createRoot(container);
root.render( 
    <React.StrictMode>
        <Jammming />
    </React.StrictMode>
);

