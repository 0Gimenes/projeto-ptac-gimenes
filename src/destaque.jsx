import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; 
export default function destaque() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    return (
        <div>
            
         
 
            {listaLocalStorage.map(( music )=><Card music ={music}/> )}
        </div>

    );
}