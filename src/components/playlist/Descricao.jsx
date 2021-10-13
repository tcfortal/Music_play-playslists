function Descricao(props){
return(
<>
    <p className="text-warning"> Música: {props.nome} </p>
    <p className="text-light"> Cantor: ({props.cantor} ) </p>
    <p className="text-light"> Duração: ( {props.tempo} min )</p>
    <p className="text-light">----------------------------------------</p>

</>
)

}

export default Descricao;