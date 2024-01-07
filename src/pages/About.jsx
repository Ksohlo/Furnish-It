import './About.css'
import aboutLogo from '../assets/about us.png'
import discuss from '../assets/sit.png'


const About = () => {
    return ( 
        <>
            <div className="AboutContainer">
                <img src={aboutLogo} className='aboutlogo'/>
                <h4>Our product has helped in shaping modern futuristic designs, intentionally pleasing our customers with the best services</h4>

                <div className="aboutelements">
                    <img src={discuss} />
                    <div className="rightelement">
                        <h2>We provide you with the best <span className='orange'>Top-Notch Services</span> you can get  </h2>
                        <p>Our product has helped in shaping modern futuristic designs, intentionally pleasing our customers with the best services. Our product has helped in shaping modern futuristic designs, intentionally pleasing our customers with the best services</p>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;