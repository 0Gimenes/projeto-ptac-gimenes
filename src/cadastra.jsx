import { useState } from "react";
import { Link} from "react-router-dom";
import { useEffect } from "react";

export default function cadastra() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const [musicav, setmusicav] = useState("");
    const [lista, setLista] = useState( listaLocalStorage);
    const [nome, setnome] = useState("");
    const [url, seturl] = useState("");
    const [artista, setartista] = useState("");
    const [canal, setcanal] = useState("");
    const [tempo, settempo] = useState("");
    const [letra, setletra] = useState("");

    const [id, setId] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.id + 1 || 1);

    useEffect(()=>{localStorage.setItem("Lista", JSON.stringify(lista))},[lista]);

    const salvar = (e) => {
        e.preventDefault();
        setLista([...lista, {
            musicav:musicav,
            id: id,
            nome:nome,
            letra:letra,
            url: url,
            artista: artista,
            tempo : tempo,
            canal: canal

        }]);
        setId(id + 1);
        setmusicav("");
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
            <h1>Cadastro de VideoMusic🎸</h1>
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
<h4><i>tempo</i></h4>
<input type="text"
                    value={tempo}
                    onChange={(e) => { settempo(e.target.value) }} />
<h4><i>Canal</i></h4>
<input type="text"
                    value={canal}
                    onChange={(e) => { setcanal(e.target.value) }} />
<br></br>
<br></br>
                <button>ADICIONAR</button>
            </form>

            {lista.map((music) =>
                <ul key={music.id}>
                    <Link to={`/detalhe/${music.id}`}>
                        <li>{music.nome} </li>
                    </Link>
                    <li>
                        <p>Nome: {music.nome}</p>
                        <p>url: {music.url}</p>
                        <p>Artista: {music.artista}</p>
                        <p>Letra: {music.letra}</p>

                        <iframe
                        width="780" 
                        height="520" 
                        src={`https://www.youtube.com/embed/${music.url.slice(17)}`}
                        title="COMO VOAR SEM TER UM PARAQUEDAS! - VLOG DE 1 HORA" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                        <br></br>
                        <button onClick={() => remover(music.id)}>Remover</button>
                    </li>
                </ul>
            )}
        </div>
    );
}