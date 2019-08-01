// import React from 'react'
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import Lightbox from "react-image-lightbox";
// import '../styles/Lightbox.css';
// import '../styles/FlexCarsGallery.css';

// import MercedesCla1 from '../images/Gallery/Mercedes/MercedesCla1.jpg'
// import MercedesCla2 from '../images/Gallery/Mercedes/MercedesCla2.jpg'
// import MercedesCla3 from '../images/Gallery/Mercedes/MercedesCla3.jpg'
// import MercedesCla4 from '../images/Gallery/Mercedes/MercedesCla4.jpg'
// import MercedesCla5 from '../images/Gallery/Mercedes/MercedesCla5.jpg'

// import MercedesClaSmall1 from '../images/Gallery/Mercedes/Small/MercedesClaSmall1.jpg'
// import MercedesClaSmall2 from '../images/Gallery/Mercedes/Small/MercedesClaSmall2.jpg'
// import MercedesClaSmall3 from '../images/Gallery/Mercedes/Small/MercedesClaSmall3.jpg'
// import MercedesClaSmall4 from '../images/Gallery/Mercedes/Small/MercedesClaSmall4.jpg'
// import MercedesClaSmall5 from '../images/Gallery/Mercedes/Small/MercedesClaSmall5.jpg'



// class MercedesGallery extends React.Component {
//     state = {
//         photoIndex: 0,
//         isOpen: false,
//         images: [
//     MercedesCla1, MercedesCla2,MercedesCla3,MercedesCla4,MercedesCla5,
//         ],
//         smallImgaes : [ 
// MercedesClaSmall1, MercedesClaSmall2,MercedesClaSmall3,MercedesClaSmall4,MercedesClaSmall5,
//         ]
//     }

//     renderImages = () => {
//         let photoIndex = -1;
//         const { smallImgaes} = this.state;

//         return smallImgaes.map(imageSrc => {
//             photoIndex++;
//             const privateKey = photoIndex;
//             return (
//                 <MDBCol md="4" key={photoIndex}>
//                     <figure>
//                         <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
//                             this.setState({ photoIndex: privateKey, isOpen: true })
//                         }
//                         />
//                     </figure>
//                 </MDBCol>
//             );
//         })
//     }

//     render() {
//         const { photoIndex, isOpen, images } = this.state;
//         return (
//             <MDBContainer className="mt-5">
//                 <div className="mdb-lightbox">
//                     <MDBRow>
//                         {this.renderImages()}
//                     </MDBRow>
//                 </div>
//                 {isOpen && (
//                     <Lightbox
//                         mainSrc={images[photoIndex]}
//                         nextSrc={images[(photoIndex + 1) % images.length]}
//                         prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//                         imageTitle={photoIndex + 1 + "/" + images.length}
//                         onCloseRequest={() => this.setState({ isOpen: false })}
//                         onMovePrevRequest={() =>
//                             this.setState({
//                                 photoIndex: (photoIndex + images.length - 1) % images.length
//                             })
//                         }
//                         onMoveNextRequest={() =>
//                             this.setState({
//                                 photoIndex: (photoIndex + 1) % images.length
//                             })
//                         }
//                     />
//                 )}
//             </MDBContainer>
//         );
//     }
// }

// export default MercedesGallery;
