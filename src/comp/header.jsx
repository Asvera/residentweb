import { useState } from 'react';
import './header.css';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';

export const Header = () => {

    const [menuOpen,setmenuOpen] = useState(false);
    const getMenustyles = (menuOpen) => {
        if (document.documentElement.clientWidth <= 800){
            return {right: !menuOpen && "-100%"}
        }
    }
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100}/>

                <OutsideClickHandler onOutsideClick={()=>setmenuOpen(false)}>
                    <div className="flexCenter h-menu" style={getMenustyles(menuOpen)}>
                        <a href="#Resdn">Residences</a>
                        <a href="">Our Values</a>
                        <a href="">About</a>
                        <a href="">Started</a>
                        <button className="button">
                            <a href="#Cntac">Contact</a>
                        </button>
                    </div>
                </OutsideClickHandler>
                <div className="menu-icon" onClick={()=>setmenuOpen((prev)=>!prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
};