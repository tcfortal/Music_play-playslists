  import React from 'react';
  import { unstable_createPortal } from 'react-dom/cjs/react-dom.development';
  import { useParams } from "react-router";
  import playlists from './playlists_mock';
  import Musicas from '../components/playlist/Musicas';
  import Descricao from '../components/playlist/Descricao';
  import Playlist from '../components/playlist/Playlist';


  function PlaylistDetail(){
  const { id } = useParams();

    const playlistSelecionada = playlists.find( (p) => p.id === parseInt (id) );
    const musicas = playlistSelecionada.musicas.map((musica) =>  {
      return(

          <div className ="row">

              <li className=" col-lg-6 list-group" key={musica.id}>
              <Descricao nome={musica.nome} cantor={musica.cantor} tempo={musica.tempo}/>
              </li>
              
              <li className="col-lg-6 list-group">
                  <Musicas arquivo={musica.arquivo}/>
              </li>

          </div>
              

      )


    } )
    return(

      
      <div className="container-xxl bg-dark ">
          
          <div className="container ">
          
              <div className ="row">
          
                  <div className="py-lg-4 col ">
                      <Playlist nome={playlistSelecionada.nome} capa={playlistSelecionada.capa}/>
                  </div>

                  <div className="col">
                      <ul className="py-lg-4 col list-group">
                          {musicas}
                      </ul>
                  </div>

              </div>


          </div>
      </div>

  )

  } 
  export default PlaylistDetail;