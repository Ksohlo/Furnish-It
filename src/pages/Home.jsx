import './Home.css'
import get from '../assets/tag big.png'
import tag from '../assets/tag small.svg'
import chair from '../assets/chair.png'
import polygon from '../assets/polygon.svg'
import About from './About'



const Home = () => {
    return ( 
        <>
            <div className="home-body">
                <img src={get} id='get'/>
                {/* <img src={tag} id='smalltag'/> */}

                <h2>Our product has helped in shaping modern futuristic designs, intentionally pleasing our customers with the best services.</h2>

                <button>Get Started <i class='bx bx-right-arrow-alt'></i></button>
                <img src={tag} id='bigtag'/>
                <img src={chair} id='chair'/>
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
            {/* <About /> */}
        </>
     );
}
 
export default Home;