import { useParams } from "react-router-dom";
import Card from "./Card";

export default function Detalhe(){
    const {id} = useParams();
    const lista = JSON.parse( localStorage.getItem("Lista"));
    const atividade = lista.filter( (music) => {
if(music.id == id){
    return music;
}
return null;
    }
    )
console.log(lista);

return(
    <Card atividade={atividade[0]}/>
);
}