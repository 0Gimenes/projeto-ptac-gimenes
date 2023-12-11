export default function Card({music}){
    console.log(music)


    return(
        <div>
<h4>{music.nome}</h4>
<iframe
                        width="900" 
                        height="720" 
                        src={`https://www.youtube.com/embed/${music.url.slice(17)}`}
                        title="COMO VOAR SEM TER UM PARAQUEDAS! - VLOG DE 1 HORA" 
                        frameborder={0} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen></iframe>
                        <h6>{music.letra}</h6>
        </div>
    )
    
    }