import React from 'react'
import '../styles/Offers.css'
import BMWX3 from '../images/Offers/BMWX3.jpg';
import TiguanGray from '../images/Offers/TiguanGray.jpg';
import FordEscapeGranatowy from '../images/Offers/FordEscapeGranatowy.jpg';
import FordFusion from '../images/Offers/FordFusion.jpg'

const Offers = () => {


  

    const data = [
        { 
            name : 'Ford Mondeo',
            img :FordFusion,
            description : 'Ford Mondeo po lifcie full wersja TYTANIUM, silnik 2.0 benzyna - moc 250 KM, skrzynia automatyczna, łopatki zmiany biegów....', 
            link : 'https://www.otomoto.pl/oferta/ford-mondeo-fusion-2-0-benzyna-ful-wersja-titanium-ID6C4rdf.html'
        },
        { 
            name : 'BMW X3',
            img : BMWX3, 
            description : 'BMW X3 F25 Z ROKU 2017 Przebieg to 16 tyś kilometrów, silnik 2.0 benzyna 245 km, automat 4x4 xdrive...', 
            link : 'https://www.otomoto.pl/oferta/bmw-x3-2-0-benzyna-250-km-4x4-xdrive-ID6BOP67.html'
        },
        { 
            name : 'Volkswagen Tiguan 4x4 ',
            img : TiguanGray,
            description : 'TIGUAN 2,0 benzyna- TSI,moc 200 KM, skrzynia biegów automatyczna, napęd na 4 koła 4motion ...', 
            link : 'https://www.otomoto.pl/oferta/volkswagen-tiguan-4x4-4motion-ID6BXjCk.html'
        },
        { 
            name : 'Ford Escape Granatowy',
            img :FordEscapeGranatowy,
            description : 'Ford Escape europejska kuga. Silnik 1,6 BENZYNA ECOBOOST 181 KM-bardzo oszczędny i dynamiczny, napęd 4X4. Najlepsza wersja TITANIUM... ', 
            link : 'https://www.otomoto.pl/oferta/ford-kuga-escape-1-6-ecoboost-wersja-titanium-4x4-ID6AiRVW.html'
        },
    ]


    return (
        <section className="offers-section">
            <h3 className="offers-h3">Zapraszamy do zapoznia się z aktualnymi ofertami. Samochody można obejrzeć w miejscowośći Słopnice.  <a
             target="_blank"
             rel="noopener noreferrer" 
            href='https://goo.gl/maps/jRVeokEzcdxuthmu7'>Zlokalizuj Nas</a>  </h3>

         


            {data.map(item=>(
                <div 
                key={item.name}
                className="offers__section__div">
                    <h4>{item.name}</h4>
                <img src={item.img} alt={item.name} />
                <p className="description">{item.description}</p>

                <a 
                target="_blank"
                rel="noopener noreferrer" 
                href={item.link}>Sprawdź aukcję</a>

            </div>
            ))}

        </section>
    );
}

export default Offers;