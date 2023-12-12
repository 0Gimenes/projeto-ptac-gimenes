import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; 
export default function Home() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    return (
        <div>
            <h1>Home</h1>
            
            
            <Link to="/Cadastra">cadastra</Link>
            <br>
            </br>
            <Link to="/Destaque">destaque</Link>
            <br>
            </br>
            <Link to="/Detalhe">Detalhe</Link>
            <br>
            </br>
            {listaLocalStorage.map(( music )=><Card music ={music}/> )}
        </div>

    );
}