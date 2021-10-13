          import { Link } from 'react-router-dom'
          import playlists from './playlists_mock'
          import Playlist from '../components/playlist/Playlist'


          function PlaylistList(){
          const res = playlists.map( (p) => {
          return( 


               
          <ul >
          <Link to={`/playlists/${p.id}`} key={p.id}>
               <Playlist  capa={p.capa}   />
               </Link>
          

               </ul>  
               
                    
          )
          })

     return (
     
               <div className=" card-group bg-dark " >
                    
                    <div className="container-xxl m-lg-2 bg-primary text-center d-inline  ">
                              
                         <h2 className="display-5 fw-bold text-light">As Melhores Playlists</h2>
                         <p className="fs-4 text-warning">Um novo jeito de escutar e sentir música!</p>
                    </div>
                         
                              <div className="me-4 card-group justify-content-center">
                                   {res}
                         
                              </div>
                    
               </div>            

     )


     }

     export default PlaylistList;