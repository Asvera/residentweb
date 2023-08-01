import './footer.css'

export const Footer = () => {

    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth  flexCenter f-container">

                {/* left side   */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />
                    <span className='secondaryText'>
                        Our vision is to provide quality to all <br />People around the gloe
                    </span>

                </div>

                {/* right side  */}
                <div className="flexColCenter f-right">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>T73 General street , New Delhi-00</span>

                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Products</span>
                        <span>About</span>
                    </div>
                </div>
            </div>
        </section>
    );
};