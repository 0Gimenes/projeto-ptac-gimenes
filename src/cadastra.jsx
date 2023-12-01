import { useState } from "react";
import { Link} from "react-router-dom";
import { useEffect } from "react";

export default function ToDo() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState( listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
    const [nome, setnome] = useState("");
    const [url, seturl] = useState("");
    const [artista, setartista] = useState("");
    const [letra, setletra] = useState("");

};