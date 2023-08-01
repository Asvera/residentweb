import './contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'


export const Contact = () => {

    return (
        <section className="c-wrapper">
            <div id='Cntac' className="flexCenter paddings innerWidth c-container">
                
                {/* left side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our contact</span>
                    <span className='primaryText'>Easy to contact</span>
                    <span className='secondaryText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum repellendus autem saepe, sunt ratione dolor!</span>
                
                    <div className="flexColStart contactmModes">
                        
                        <div className="flexStart row">
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>9189783901</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>

                            {/* second mode */}
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat Call</span>
                                        <span className='secondaryText'>9189783901</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>


                        {/* Second row  */}
                        <div className="flexStart row">
                            {/* Third mode */}
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>9189783901</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Call Now</div>
                            </div>

                            {/* Fourth Mode   */}
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>9189783901</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message </div>
                            </div>
                        </div>

                        
                    </div>
                </div>



                {/* right side  */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};