    import React from 'react';
    import { CardImg } from 'react-bootstrap';
    import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
    import classicRock from "../src/images/classicRock.jpg"
    import pop from "../src/images/pop.jpg"
    import acoustic from "../src/images/acoustic.jpg"
    import aoVivo from "../src/images/aoVivo.jpg"
    import electro from "../src/images/electro.jpg"
    import metal from "../src/images/metal.jpg"
    import hiphop from "../src/images/hiphop.jpg"
    import classic from "../src/images/classic.jpg"
    import carousel3 from "../src/images/carousel3.jpg"
    import carousel2 from "../src/images/carousel2.jpg"
    import carousel1 from "../src/images/carousel1.png"
    import Carousel from 'react-bootstrap/Carousel'

    const Home = () => {
    return (
    <div>

    <div className="container py-4 justify-content-center">
    <Carousel>
    <Carousel.Item interval={2000}>
        <Link to="playlists"><img className="d-block w-100" src={carousel1} alt="Primeiro Slide"/></Link>
        <Carousel.Caption> 
        </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <Link to="playlists"><img className="d-block w-100" src={carousel2} alt="Primeiro Slide"/></Link>
        <Carousel.Caption>
        </Carousel.Caption>

    </Carousel.Item>
    <Carousel.Item interval={2000}>
    <Link to="playlists"><img className="d-block w-100 " src={carousel3} alt="Primeiro Slide"/></Link>
        <Carousel.Caption>
        </Carousel.Caption>

    </Carousel.Item>
    </Carousel>


    </div>




        

        <section className="py-4">
                <div className="container px-lg-5">
                
                    <div className="row gx-lg-5">

                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/1">
                            <CardImg src={classicRock} alt="" />
                            </Link>
                        </div>


                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/2">
                            <CardImg src={pop} alt="" />
                            </Link>
                        </div>



                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/3">
                            <CardImg src={acoustic} alt="" />
                            </Link>
                        </div>


                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/4">
                            <CardImg src={aoVivo} alt="" />
                            </Link>
                        </div>


                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/5">
                            <CardImg src={electro} alt="" />
                            </Link>
                        </div>



                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/6">
                            <CardImg src={metal} alt="" />
                            </Link>
                        </div>



                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/7">
                            <CardImg src={hiphop} alt="" />
                            </Link>
                        </div>




                        <div className="col-lg-6 col-xxl-4 mb-5">   
                        <Link to="playlists/8">
                            <CardImg src={classic} alt="" />
                            </Link>
                        </div>
                



                    </div>
                </div>
            </section>


        </div>


    );
    };


    export default Home;