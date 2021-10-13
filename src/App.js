  import Home from './Home.js';
  import Header from './Header.js';
  import Footer from './Footer.js';
  import React from 'react';
  import PlaylistList from './playlist/PlaylistList';
  import {BrowserRouter , Switch, Route} from 'react-router-dom';
  import Faq from './Faq.js';
  import './App.css';
  import PlaylistDetail from './playlist/PlaylistDetail.jsx';
  import UserSignup from './user/UserSignup.jsx';


  function App(){
    return (
    
      <BrowserRouter>
        
      <Header />
      <Switch>

      <Route path="/Home">
        <Home />
      </Route>


      <Route path="/playlists/:id">
        <PlaylistDetail />
      </Route>


      <Route path="/playlists">
        <PlaylistList />
      </Route>

      <Route path="/signup">   
        <UserSignup />   
    </Route>

      <Route path="/Faq">
        <Faq/>
      </Route> 

      <Route path="/">
        <Home/>
      </Route> 
      </Switch>

      <Footer />
  </BrowserRouter>




    );
  };

  export default App;
