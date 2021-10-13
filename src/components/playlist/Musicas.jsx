function Musicas(props){
return(

            <audio controls>
              <source src= {props.arquivo} type = "audio/mpeg"/>
             </audio>


)





}
export default Musicas;