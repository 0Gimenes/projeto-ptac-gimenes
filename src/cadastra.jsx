import { useState } from "react";
import { Link} from "react-router-dom";
import { useEffect } from "react";

export default function cadastra() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
    const [atividade, setAtividade] = useState("");
    const [lista, setLista] = useState( listaLocalStorage || []);
    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);
    const [nome, setnome] = useState("");
    const [url, seturl] = useState("");
    const [artista, setartista] = useState("");
    const [letra, setletra] = useState("");


    useEffect(()=>{localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            atividade: atividade,
            id: id,
            nome:nome,
            letra:letra,
            url: url,
            artista: artista
        }]);
        setId(id + 1);
        setAtividade("");
    };
    const remover = (id) => {

        /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/

        const auxLista = [];
        lista.map((list) => {
            if (list.id !== id) {
                auxLista.push(list);
            }
        });
        setLista(auxLista);
    }
    return (
        <div class="container">
            <Link to="/">home</Link>
            <img class = "jukebox" src="https://o.remove.bg/downloads/34c3af20-9a3c-4b9a-9b36-42690e5dcbeb/jukebox-classic-pequeno-_27296-01-removebg-preview.png"></img>
            <h1>Lista de Musicas 🎸</h1>
            <form onSubmit={salvar}>

                <h4><i>Nome</i></h4>  
                <input type="text"
                    value={nome}
                    onChange={(e) => { setnome(e.target.value) }} />
               
          
      
<h4><i>Url</i></h4>
            <input type="text"
                    value={url}
                    onChange={(e) => { seturl(e.target.value) }} />

<h4><i>artista</i></h4>
                       <input type="text"
                    value={artista}
                    onChange={(e) => { setartista(e.target.value) }} />

<h4><i>letra</i></h4>
                       <input type="text"
                    value={letra}
                    onChange={(e) => { setletra(e.target.value) }} />
<br></br>
<br></br>
                <button>ADICIONAR</button>
            </form>

            {lista.map((ativ) =>
                <ul key={ativ.id}>
                    <Link to={`/detalhe/${ativ.id}`}>
                        <li>{ativ.album} </li>
                    </Link>
                    <li>
                        <p>Nome: {ativ.album}</p>
                        <p>Musica: {ativ.musica}</p>
                        <p>Tempo: {ativ.tempo}</p>
                        <p>Tempo: {ativ.tempo}</p>
                        <button onClick={() => remover(ativ.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}