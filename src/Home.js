import React from 'react';
import './Home.css';
import iPhone from './iPhone.jpg';
import Airpods from './Airpods.jpg';
import Noisewatch from './Noisewatch.jpg';
import Amazefitwatch from './amazefitwatch.jpg';
import Fitbitwatch from './fitbitwatch.png';
import Lgtv from './lgtv.jpg';
import Product from './Product';
// import Banner from '../src/Amazon-banner.jpg'
function Home() {
    return (
        <div className="home">
            <div className="home__conatainer">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />

                <div className="home__row hover-zoom style={{ maxWidth: '22rem' }}">
                    {/* <div className='bg-image hover-zoom' style={{ maxWidth: '30rem' }}> */}
                        <Product id="10001" title="Apple iPhone 11 (64GB) - (Product) RED" price={40} image={iPhone} rating={5}/>
                    {/* </div> */}
                    <Product id="10002" title="Apple Airpods Pro (2nd Gen) with Case " price={20} image={Airpods} rating={5}/>
                </div>

                <div className="home__row">
                <Product id="10003" title="Noise ColorFit Pulse Smartwatch with 1.4 Full Touch HD Display, SpO2 (Olive)" price={50} image={Noisewatch} rating={4}/>
                <Product id="10004" title="Amazfit GTS2 Mini Smart Watch with 1.55 AMOLED Display, 70+ Sports Modes (Meteor Black)" price={25} image={Amazefitwatch} rating={3}/>
                <Product id="10005" title="Fitbit FB507GYSR Versa 2 Health & Fitness Smartwatch with Heart Rate, Music (White)" price={10} image={Fitbitwatch} rating={4}/>
                </div>

                <div className="home__row">
                <Product id="10006" title="LG 139.7 cm (55 inches) 4K Ultra HD Smart LED TV 55UP7500PTZ (Rocky Black) (2021 Model)" price={55} image={Lgtv} rating={4}/>
                </div>
            </div>
        </div>
    )
}

export default Home
