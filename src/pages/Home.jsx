import './Home.css'
import get from '../assets/tag big.png'
import tag from '../assets/tag small.svg'
import chair from '../assets/chair.png'
import chair2 from '../assets/chair.png'
import polygon from '../assets/polygon.svg'
import About from './About'
import { useState } from 'react'



const Home = () => {

    return ( 
        <>
            <div className="home-body">
                <img src={get} id='get'/>
                {/* <img src={tag} id='smalltag'/> */}

                <h2>Our product has helped in shaping modern futuristic designs, intentionally pleasing our customers with the best services.</h2>

                <button>Get Started <i className='bx bx-right-arrow-alt'></i></button>
                <img src={tag} id='bigtag'/>
                <picture>
                    <source media="(max-width: 1000px)" srcSet={chair2} />
                    <img src={chair} id='chair' />
                </picture>
                {/* <div id='chair'></div> */}
                {/* <img src={img} id='chair' /> */}
                <div className="bottom-container">
                    <div className="texts">
                        <h1 className='orange'>13+</h1>
                        <p>Years Of Experience</p>
                    </div>
                    <img src={polygon} className='polygon'/>
                    <div className="texts">
                        <h1 className='orange'>123k+</h1>
                        <p>Happy Costumers</p>
                    </div>
                    <img src={polygon} className='polygon'/>
                    <div className="texts">
                        <h1 className='orange'>99.9%</h1>
                        <p>Costumer Satisfaction</p>
                    </div>
                </div>
            </div>
            <About />
        </>
     );
}
 
export default Home;