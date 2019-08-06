import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";


import BmwBlack1 from '../../../assets/gallery/Bmw/BmwBlack1.JPG';
import BmwBlack2 from '../../../assets/gallery/Bmw/BmwBlack2.JPG';
import BmwBlack3 from '../../../assets/gallery/Bmw/BmwBlack3.JPG';
import BmwBlack4 from '../../../assets/gallery/Bmw/BmwBlack4.JPG';
import BmwWhite1 from '../../../assets/gallery/Bmw/BmwWhite1.JPG';
import BmwWhite2 from '../../../assets/gallery/Bmw/BmwWhite2.JPG';
import BmwMix1 from '../../../assets/gallery/Bmw/BmwMix1.JPG';
import BmwMix2 from '../../../assets/gallery/Bmw/BmwMix2.JPG';
import BmwMix3 from '../../../assets/gallery/Bmw/BmwMix3.JPG';
import BmwMix4 from '../../../assets/gallery/Bmw/BmwMix4.JPG';
import BmwMix5 from '../../../assets/gallery/Bmw/BmwMix5.JPG';
import BmwMix6 from '../../../assets/gallery/Bmw/BmwMix6.JPG';
import BmwMix7 from '../../../assets/gallery/Bmw/BmwMix7.JPG';
import BmwMix8 from '../../../assets/gallery/Bmw/BmwMix8.JPG';




import BmwBlackSmall1 from '../../../assets/gallery/Bmw/Small/BmwBlackSmall1.JPG';
import BmwBlackSmall2 from '../../../assets/gallery/Bmw/Small/BmwBlackSmall2.JPG';
import BmwBlackSmall3 from '../../../assets/gallery/Bmw/Small/BmwBlackSmall3.JPG';
import BmwBlackSmall4 from '../../../assets/gallery/Bmw/Small/BmwBlackSmall4.JPG';
import BmwWhiteSmall1 from '../../../assets/gallery/Bmw/Small/BmwWhiteSmall1.JPG';
import BmwWhiteSmall2 from '../../../assets/gallery/Bmw/Small/BmwWhiteSmall2.JPG';
import BmwMixSmall1 from '../../../assets/gallery/Bmw/Small/BmwMixSmall1.JPG';
import BmwMixSmall2 from '../../../assets/gallery/Bmw/Small/BmwMixSmall2.JPG';
import BmwMixSmall3 from '../../../assets/gallery/Bmw/Small/BmwMixSmall3.JPG';
import BmwMixSmall4 from '../../../assets/gallery/Bmw/Small/BmwMixSmall4.JPG';
import BmwMixSmall5 from '../../../assets/gallery/Bmw/Small/BmwMixSmall5.JPG';
import BmwMixSmall6 from '../../../assets/gallery/Bmw/Small/BmwMixSmall6.JPG';
import BmwMixSmall7 from '../../../assets/gallery/Bmw/Small/BmwMixSmall7.JPG';
import BmwMixSmall8 from '../../../assets/gallery/Bmw/Small/BmwMixSmall8.JPG';





class BmwGallery extends React.Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            BmwBlack1,
            BmwBlack2,
            BmwBlack3,
            BmwBlack4,
            BmwWhite1,
            BmwWhite2,
            BmwMix1,
            BmwMix2,
            BmwMix3,
            BmwMix4,
            BmwMix5,
            BmwMix6,
            BmwMix7,
            BmwMix8,


        ],
        smallImages: [
            BmwBlackSmall1,
            BmwBlackSmall2,
            BmwBlackSmall3,
            BmwBlackSmall4,
            BmwWhiteSmall1,
            BmwWhiteSmall2,
            BmwMixSmall1,
            BmwMixSmall2,
            BmwMixSmall3,
            BmwMixSmall4,
            BmwMixSmall5,
            BmwMixSmall6,
            BmwMixSmall7,
            BmwMixSmall8,


        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const { smallImages } = this.state;

        return smallImages.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="4" key={photoIndex}>
                    <figure>
                        <img src={smallImages[photoIndex]} alt="Gallery" className="img-fluid" onClick={() =>
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
            <MDBContainer className="mt-5">
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

export default BmwGallery;
