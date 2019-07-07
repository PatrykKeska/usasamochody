import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCameraRetro, faShoppingCart, faPhoneSquare, faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faCameraRetro, faShoppingCart, faPhoneSquare, faBars, faTimes, faArrowRight);



const dataMenu = [
    {
        name: "Główna",
        path: "/",
        icon: "home",
        id : '4', 


    },
    {
        name: "Galeria",
        path: "/Gallery",
        icon: 'camera-retro',

    },
    {
        name: "Oferty",
        path: "/Offers",
        icon: "shopping-cart",


    },
    {
        name: "Kontakt",
        path: "/Contact",
        icon: "phone-square",


    },
]



const handleClick = () => {
    if (window.innerWidth < 1024) {
        const nav = document.querySelector('aside');
        const bars = document.querySelector('.fa-bars');
        const times = document.querySelector('.fa-times');

        nav.classList.toggle('menuOn');
        bars.classList.toggle('opacityOn');
        times.classList.toggle('opacityOn');
    }
}

const hanldeScroll = (e) => {
    const mainSection = document.querySelector('.main-section-page'); 
   
    mainSection.scrollIntoView({ 
            behavior: "smooth", 
        })
   

    
    
}







const menu = dataMenu.map(item => (
    <li onClick={hanldeScroll} key={item.name}>
        <NavLink className={`${'nav-a ' + item.name}`} id= {item.id} onClick={() => {
            setTimeout(handleClick, 400)
        }} exact to={item.path}>
            <span className="li-font-awesome-span"> <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon></span>
            <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
            {item.name}</NavLink></li>
))

const Navigation = () => {

    return (
        <div className="nav-div-wrapper">
            <FontAwesomeIcon className="opacityOn menuSvg" onClick={handleClick} icon="bars"></FontAwesomeIcon>
            <FontAwesomeIcon className='menuSvg' onClick={handleClick} icon="times"></FontAwesomeIcon>
            <nav>
                <ul>
                    {menu}
                </ul>
            </nav>
        </div>

    );
}

export default Navigation;