import React from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCol
} from "mdbreact";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'




import Audi1 from '../../../assets/gallery/Audi/AudiWHite1.JPG'
import Audi2 from '../../../assets/gallery/Audi/AudiWHite2.JPG'
import Audi3 from '../../../assets/gallery/Audi/AudiWHite3.JPG'
import Audi4 from '../../../assets/gallery/Audi/AudiWHite4.JPG'
import Audi5 from '../../../assets/gallery/Audi/AudiWHite5.JPG'
import Audi6 from '../../../assets/gallery/Audi/AudiWHite6.JPG'
import Audi7 from '../../../assets/gallery/Audi/AudiWHite7.JPG'
import Audi8 from '../../../assets/gallery/Audi/AudiWHite8.JPG'
import Audi9 from '../../../assets/gallery/Audi/AudiWHite9.JPG'
import Audi10 from '../../../assets/gallery/Audi/AudiWHite10.JPG'
import Audi11 from '../../../assets/gallery/Audi/AudiWHite11.JPG'
import Audi12 from '../../../assets/gallery/Audi/b9Audi1.jpg'
import Audi13 from '../../../assets/gallery/Audi/b9Audi2.jpg'
import Audi14 from '../../../assets/gallery/Audi/b9Audi3.jpg'
import Audi15 from '../../../assets/gallery/Audi/b9Audi4.jpg'


import AudiSmall1 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall1.JPG';
import AudiSmall2 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall2.JPG';
import AudiSmall3 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall3.JPG';
import AudiSmall4 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall4.JPG';
import AudiSmall5 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall5.JPG';
import AudiSmall6 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall6.JPG';
import AudiSmall7 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall7.JPG';
import AudiSmall8 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall8.JPG';
import AudiSmall9 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall9.JPG';
import AudiSmall10 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall10.JPG';
import AudiSmall11 from '../../../assets/gallery/Audi/Small/AudiWHiteSmall11.JPG';
import AudiSmall12 from '../../../assets/gallery/Audi/Small/b9AudiSmall1.jpg';
import AudiSmall13 from '../../../assets/gallery/Audi/Small/b9AudiSmall2.jpg';
import AudiSmall14 from '../../../assets/gallery/Audi/Small/b9AudiSmall3.jpg';
import AudiSmall15 from '../../../assets/gallery/Audi/Small/b9AudiSmall4.jpg';


class AudiGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            Audi1, Audi2, Audi3, Audi4, Audi5, Audi6, Audi7, Audi8, Audi9, Audi10, Audi11,Audi12,Audi13,Audi14,Audi15,
        ],
        smallImages: [
            AudiSmall1, AudiSmall2, AudiSmall3, AudiSmall4, AudiSmall5, AudiSmall6, AudiSmall7, AudiSmall8, AudiSmall9, AudiSmall10, AudiSmall11,AudiSmall12,AudiSmall13,AudiSmall14,AudiSmall15,
        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const {
            smallImages
        } = this.state;

        return smallImages.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (<MDBCol md="3"
                key={
                    photoIndex
                } >
                < figure >
                    <
                        img src={
                            imageSrc
                        }
                        alt="Gallery"
                        className="img-fluid"
                        onClick={
                            () =>
                                this.setState({
                                    photoIndex: privateKey,
                                    isOpen: true
                                })
                        }
                    /> </figure > </MDBCol>
            );
        })
    }

    render() {

        const {
            photoIndex,
            isOpen,
            images
        } = this.state;
        return (
        <MDBContainer className="mt-4" >
            <div className="mdb-lightbox" >
                <MDBRow> {
                    this.renderImages()
                } </MDBRow> </div > {
                isOpen && (<
                    Lightbox mainSrc={
                        images[photoIndex]
                    }
                    nextSrc={
                        images[(photoIndex + 1) % images.length]
                    }
                    prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                    }
                    imageTitle={
                        photoIndex + 1 + "/" + images.length
                    }
                    onCloseRequest={
                        () => this.setState({
                            isOpen: false
                        })
                    }
                    onMovePrevRequest={
                        () =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                    }
                    onMoveNextRequest={
                        () =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                    }
                />
                )
            } </MDBContainer>
        );
    }
}

export default AudiGallery;