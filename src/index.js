import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root"));

function saludar() {
    return (<h1>Este es un componente</h1>)
}

root.render(saludar())