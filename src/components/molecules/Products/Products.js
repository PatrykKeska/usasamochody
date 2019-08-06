import React from 'react'
import FordGallery from '../../oragnism/FordGallery/FordGallery';
import AudiGallery from '../../oragnism/AudiGallery/AudiGallery';
import VolkswagenGallery from '../../oragnism/VolkswagenGallery/VolkswagenGallery';
import BmwGallery from '../../oragnism/BmwGallery/BmwGallery';
import MercedesGallery from '../../oragnism/MercedesGallery/MercedesGallery';
import JeepGallery from '../../oragnism/JeepGallery/JeepGallery';



class Photos extends React.Component{ 

    state={}

    render(){
        const {id} = this.props;
    return(
    <>
    {id==='ford' ? <FordGallery/> : null }
    {id==='audi'? <AudiGallery/> : null}
    {id === 'volkswagen' ? <VolkswagenGallery/> : null} 
    {id === 'bmw' ? <BmwGallery/> : null} 
    {id === 'mercedes' ? <MercedesGallery/> : null} 
    {id === 'jeep' ? <JeepGallery/> : null} 
    </>)
    }
}




export default Photos;