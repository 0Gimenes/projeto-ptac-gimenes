export default function Card({music}){
    console.log(music)

const musicID =music.url.slice(17)
    return(
        <div>
<h4>{music.url}</h4>
<iframe
                        width="780" 
                        height="520" 
                        src={`https://www.youtube.com/embed/${music.url.slice(musicID)}`}
                        title="COMO VOAR SEM TER UM PARAQUEDAS! - VLOG DE 1 HORA" 
                        frameborder={0} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen></iframe>
                        <h6>{music.letra}</h6>
        </div>
    )
    
    }