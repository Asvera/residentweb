import CountUp from 'react-countup';
import './hero.css'
import {HiLocationMarker} from 'react-icons/hi';
import {animate, motion} from 'framer-motion';

export const Hero = () => {

    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                {/* left side  */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1 initial={{y:"2rem",opacity:0}} animate={{y:0 , opacity:1}} transition={{duration:2,type:"spring"}}>Discover <br />Most Suitable <br />Property</motion.h1>
                    </div>

                    <div className="flexColStart hero-des">
                        <span className='secondaryText'>Lorem, ipsum dolor sit amet consectetur adipios know</span>
                        <span className='secondaryText'>Lorem, ipsum dolor sit amet consectetur adipios know</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={400} end={553} duration={4}/><span>+</span>
                            </span>
                            <span className='secondaryText'>Events</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={25} /><span>+</span>
                            </span>
                            <span className='secondaryText'>Awards</span>
                        </div>
                    </div>
                </div>


                {/* right side */}
                <div className="flexCenter hero-right">
                    <motion.div  intial={{x:"7rem",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:"ease-in"}} className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};