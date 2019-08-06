import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css'

import EscapeBlack1 from '../../../assets/gallery/Ford/EscapeBlack1.JPG'
import EscapeBlack2 from '../../../assets/gallery/Ford/EscapeBlack2.JPG'
import EscapeBlack3 from '../../../assets/gallery/Ford/EscapeBlack3.JPG'
import EscapeBlack4 from '../../../assets/gallery/Ford/EscapeBlack4.JPG'
import EscapeLightGray1 from '../../../assets/gallery/Ford/EscapeLightGray1.JPG'
import EscapeLightGray2 from '../../../assets/gallery/Ford/EscapeLightGray2.JPG'
import EscapeLightGray3 from '../../../assets/gallery/Ford/EscapeLightGray3.JPG'
import EscapeLightGray4 from '../../../assets/gallery/Ford/EscapeLightGray4.JPG'
import EscapeLightGray5 from '../../../assets/gallery/Ford/EscapeLightGray5.JPG'
import EscapeLightGray6 from '../../../assets/gallery/Ford/EscapeLightGray6.JPG'
import EscapeRed1 from '../../../assets/gallery/Ford/EscapeRed1.JPG'
import EscapeRed2 from '../../../assets/gallery/Ford/EscapeRed2.JPG'
import EscapeRed3 from '../../../assets/gallery/Ford/EscapeRed3.JPG'
import EscapeRed4 from '../../../assets/gallery/Ford/EscapeRed4.JPG'
import EscapeRed5 from '../../../assets/gallery/Ford/EscapeRed5.JPG'
import EscapeRed6 from '../../../assets/gallery/Ford/EscapeRed6.JPG'
import EscapeWhite1 from '../../../assets/gallery/Ford/EscapeWhite1.JPG'
import EscapeWhite2 from '../../../assets/gallery/Ford/EscapeWhite2.JPG'
import EscapeWhite3 from '../../../assets/gallery/Ford/EscapeWhite3.JPG'
import EscapeWhite4 from '../../../assets/gallery/Ford/EscapeWhite4.JPG'
import FocusBlue1 from '../../../assets/gallery/Ford/FocusBlue1.JPG'
import FocusBlue2 from '../../../assets/gallery/Ford/FocusBlue2.JPG'
import FocusBlue3 from '../../../assets/gallery/Ford/FocusBlue3.JPG'
import FocusBlue4 from '../../../assets/gallery/Ford/FocusBlue4.JPG'
import FocusBlue5 from '../../../assets/gallery/Ford/FocusBlue5.JPG'
import FocusLightBlue1 from '../../../assets/gallery/Ford/FocusLightBlue1.JPG'
import FocusLightBlue2 from '../../../assets/gallery/Ford/FocusLightBlue2.JPG'
import FocusLightBlue3 from '../../../assets/gallery/Ford/FocusLightBlue3.JPG'
import FocusLightBlue4 from '../../../assets/gallery/Ford/FocusLightBlue4.JPG'
import FocusLightBlue5 from '../../../assets/gallery/Ford/FocusLightBlue5.JPG'
import FocusLightBlue6 from '../../../assets/gallery/Ford/FocusLightBlue6.JPG'
import FocusSilver1 from '../../../assets/gallery/Ford/FocusSilver1.JPG'
import FocusSilver2 from '../../../assets/gallery/Ford/FocusSilver2.JPG'
import FocusSilver3 from '../../../assets/gallery/Ford/FocusSilver3.JPG'
import FocusSilver4 from '../../../assets/gallery/Ford/FocusSilver4.JPG'
import FusionRed1 from '../../../assets/gallery/Ford/FusionRed1.JPG'
import FusionRed2 from '../../../assets/gallery/Ford/FusionRed2.JPG'
import FusionRed3 from '../../../assets/gallery/Ford/FusionRed3.JPG'
import FusionRed4 from '../../../assets/gallery/Ford/FusionRed4.JPG'
import MondeoRed1 from '../../../assets/gallery/Ford/MondeoRed1.jpg'
import MondeoRed2 from '../../../assets/gallery/Ford/MondeoRed2.jpg'
import MondeoRed3 from '../../../assets/gallery/Ford/MondeoRed3.jpg'
import MondeoRed4 from '../../../assets/gallery/Ford/MondeoRed4.jpg'
import MondeoRed5 from '../../../assets/gallery/Ford/MondeoRed5.jpg'
import MondeoRed6 from '../../../assets/gallery/Ford/MondeoRed6.jpg'
import MondeoRed7 from '../../../assets/gallery/Ford/MondeoRed7.jpg'
import MondeoRed8 from '../../../assets/gallery/Ford/MondeoRed8.jpg'
import MondeoRed9 from '../../../assets/gallery/Ford/MondeoRed9.jpg'
import MondeoRed10 from '../../../assets/gallery/Ford/MondeoRed10.jpg'
import MondeoRed11 from '../../../assets/gallery/Ford/MondeoRed11.jpg'
import MondeoRed12 from '../../../assets/gallery/Ford/MondeoRed12.jpg'
import MondeoRed13 from '../../../assets/gallery/Ford/MondeoRed13.jpg'
import MondeoRed14 from '../../../assets/gallery/Ford/MondeoRed14.jpg'


import EscapeBlackSmall1 from '../../../assets/gallery/Ford/Small/EscapeBlackSmall1.JPG'
import EscapeBlackSmall2 from '../../../assets/gallery/Ford/Small/EscapeBlackSmall2.JPG'
import EscapeBlackSmall3 from '../../../assets/gallery/Ford/Small/EscapeBlackSmall3.JPG'
import EscapeBlackSmall4 from '../../../assets/gallery/Ford/Small/EscapeBlackSmall4.JPG'
import EscapeLightGraySmall1 from '../../../assets/gallery/Ford/Small/EscapeLightGraySmall1.JPG'
import EscapeLightGraySmall2 from '../../../assets/gallery/Ford/Small/EscapeLightGraySmall2.JPG'
import EscapeLightGraySmall3 from '../../../assets/gallery/Ford/Small/EscapeLightGraySmall3.JPG'
import EscapeLightGraySmall4 from '../../../assets/gallery/Ford/Small/EscapeLightGraySmall4.JPG'
import EscapeLightGraySmall5 from '../../../assets/gallery/Ford/Small/EscapeLightGraySmall5.JPG'
import EscapeLightGraySmall6 from '../../../assets/gallery/Ford/Small/EscapeLightGraySmall6.JPG'
import EscapeRedSmall1 from '../../../assets/gallery/Ford/Small/EscapeRedSmall1.JPG'
import EscapeRedSmall2 from '../../../assets/gallery/Ford/Small/EscapeRedSmall2.JPG'
import EscapeRedSmall3 from '../../../assets/gallery/Ford/Small/EscapeRedSmall3.JPG'
import EscapeRedSmall4 from '../../../assets/gallery/Ford/Small/EscapeRedSmall4.JPG'
import EscapeRedSmall5 from '../../../assets/gallery/Ford/Small/EscapeRedSmall5.JPG'
import EscapeRedSmall6 from '../../../assets/gallery/Ford/Small/EscapeRedSmall6.JPG'
import EscapeWhiteSmall1 from '../../../assets/gallery/Ford/Small/EscapeWhiteSmall1.JPG'
import EscapeWhiteSmall2 from '../../../assets/gallery/Ford/Small/EscapeWhiteSmall2.JPG'
import EscapeWhiteSmall3 from '../../../assets/gallery/Ford/Small/EscapeWhiteSmall3.JPG'
import EscapeWhiteSmall4 from '../../../assets/gallery/Ford/Small/EscapeWhiteSmall4.JPG'
import FocusBlueSmall1 from '../../../assets/gallery/Ford/Small/FocusBlueSmall1.JPG'
import FocusBlueSmall2 from '../../../assets/gallery/Ford/Small/FocusBlueSmall2.JPG'
import FocusBlueSmall3 from '../../../assets/gallery/Ford/Small/FocusBlueSmall3.JPG'
import FocusBlueSmall4 from '../../../assets/gallery/Ford/Small/FocusBlueSmall4.JPG'
import FocusBlueSmall5 from '../../../assets/gallery/Ford/Small/FocusBlueSmall5.JPG'
import FocusLightBlueSmall1 from '../../../assets/gallery/Ford/Small/FocusLightBlueSmall1.JPG'
import FocusLightBlueSmall2 from '../../../assets/gallery/Ford/Small/FocusLightBlueSmall2.JPG'
import FocusLightBlueSmall3 from '../../../assets/gallery/Ford/Small/FocusLightBlueSmall3.JPG'
import FocusLightBlueSmall4 from '../../../assets/gallery/Ford/Small/FocusLightBlueSmall4.JPG'
import FocusLightBlueSmall5 from '../../../assets/gallery/Ford/Small/FocusLightBlueSmall5.JPG'
import FocusLightBlueSmall6 from '../../../assets/gallery/Ford/Small/FocusLightBlueSmall6.JPG'
import FocusSilverSmall1 from '../../../assets/gallery/Ford/Small/FocusSilverSmall1.JPG'
import FocusSilverSmall2 from '../../../assets/gallery/Ford/Small/FocusSilverSmall2.JPG'
import FocusSilverSmall3 from '../../../assets/gallery/Ford/Small/FocusSilverSmall3.JPG'
import FocusSilverSmall4 from '../../../assets/gallery/Ford/Small/FocusSilverSmall4.JPG'
import FusionRedSmall1 from '../../../assets/gallery/Ford/Small/FusionRedSmall1.JPG'
import FusionRedSmall2 from '../../../assets/gallery/Ford/Small/FusionRedSmall2.JPG'
import FusionRedSmall3 from '../../../assets/gallery/Ford/Small/FusionRedSmall3.JPG'
import FusionRedSmall4 from '../../../assets/gallery/Ford/Small/FusionRedSmall4.JPG'



class FordGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            EscapeBlack1,
            EscapeBlack2,
            EscapeBlack3,
            EscapeBlack4,
            EscapeLightGray1,
            EscapeLightGray2,
            EscapeLightGray3,
            EscapeLightGray4,
            EscapeLightGray5,
            EscapeLightGray6,
            EscapeRed1,
            EscapeRed2,
            EscapeRed3,
            EscapeRed4,
            EscapeRed5,
            EscapeRed6,
            EscapeWhite1,
            EscapeWhite2,
            EscapeWhite3,
            EscapeWhite4,
            FocusBlue1,
            FocusBlue2,
            FocusBlue3,
            FocusBlue4,
            FocusBlue5,
            FocusLightBlue1,
            FocusLightBlue2,
            FocusLightBlue3,
            FocusLightBlue4,
            FocusLightBlue5,
            FocusLightBlue6,
            FocusSilver1,
            FocusSilver2,
            FocusSilver3,
            FocusSilver4,
            FusionRed1,
            FusionRed2,
            FusionRed3,
            FusionRed4,
            MondeoRed1,
            MondeoRed2,
            MondeoRed3,
            MondeoRed4,
            MondeoRed5,
            MondeoRed6,
            MondeoRed7,
            MondeoRed8,
            MondeoRed9,
            MondeoRed10,
            MondeoRed11,
            MondeoRed12,
            MondeoRed13,
            MondeoRed14,
        ],
        smallImages: [
            EscapeBlackSmall1,
            EscapeBlackSmall2,
            EscapeBlackSmall3,
            EscapeBlackSmall4,
            EscapeLightGraySmall1,
            EscapeLightGraySmall2,
            EscapeLightGraySmall3,
            EscapeLightGraySmall4,
            EscapeLightGraySmall5,
            EscapeLightGraySmall6,
            EscapeRedSmall1,
            EscapeRedSmall2,
            EscapeRedSmall3,
            EscapeRedSmall4,
            EscapeRedSmall5,
            EscapeRedSmall6,
            EscapeWhiteSmall1,
            EscapeWhiteSmall2,
            EscapeWhiteSmall3,
            EscapeWhiteSmall4,
            FocusBlueSmall1,
            FocusBlueSmall2,
            FocusBlueSmall3,
            FocusBlueSmall4,
            FocusBlueSmall5,
            FocusLightBlueSmall1,
            FocusLightBlueSmall2,
            FocusLightBlueSmall3,
            FocusLightBlueSmall4,
            FocusLightBlueSmall5,
            FocusLightBlueSmall6,
            FocusSilverSmall1,
            FocusSilverSmall2,
            FocusSilverSmall3,
            FocusSilverSmall4,
            FusionRedSmall1,
            FusionRedSmall2,
            FusionRedSmall3,
            FusionRedSmall4,
            MondeoRed1,
            MondeoRed2,
            MondeoRed3,
            MondeoRed4,
            MondeoRed5,
            MondeoRed6,
            MondeoRed7,
            MondeoRed8,
            MondeoRed9,
            MondeoRed10,
            MondeoRed11,
            MondeoRed12,
            MondeoRed13,        ]
}

    renderImages = () => {
        let photoIndex = -1;
        const { smallImages } = this.state;
        return smallImages.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
              
                <MDBCol md="3" key={photoIndex}>
                    <figure>
                        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
                            this.setState({ photoIndex: privateKey, isOpen: true })
                        }
                        />
                    </figure>
                </MDBCol>
               
            );
        })
    }
    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
           
            <MDBContainer className="mt-4">
                <div className="mdb-lightbox">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </MDBContainer>
           
        );
    }
}

export default FordGallery;