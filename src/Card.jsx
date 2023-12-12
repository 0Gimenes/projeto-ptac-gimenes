export default function Card({music}){
    console.log(music)

const musicID = music.url.slice(17)
    return(
        <div>
<br></br>
<iframe
                        width="580" 
                        height="420" 
                        src={`https://www.youtube.com/embed/${musicID}`}
                        title="COMO VOAR SEM TER UM PARAQUEDAS! - VLOG DE 1 HORA" 
                        frameborder={0} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen></iframe>
                       
        </div>
    )
    
    }