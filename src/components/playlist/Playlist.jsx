        function Playlist(props){
        return(
                <div className=" card-item" style={{width: '350px'}}>
                <img src={props.capa} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className=" text-center my-auto">{props.nome}</h5>
                        </div>
                </div>



        )

        }
        export default Playlist;

        