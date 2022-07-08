import './hotel.css'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../component/mailList/MailList'
import Footer from '../../component/footer/Footer'
import { useState } from 'react'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

const Hotel = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)
    const photos = [
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/330281475.jpg?k=8a8327ac1d4e38831b091c30085c5ee3951f0827073a79269a3fee5462a8112c&o=&hp=1' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/277729661.jpg?k=d87ecb2c1bfcc2706e23c079451294d357fb29c85d6d2d2bf5ba082a2404cf74&o=&hp=1' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/330281468.jpg?k=9e80746ac3af9eebd847ef33d47428d48595849b4a79834a6c3c876c6fac9765&o=&hp=1' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/330281469.jpg?k=7d753fdc296e3fbbe0d5b59dd38374a0450c9b32ad137a3bc0dabe75aabff582&o=&hp=1' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/330281467.jpg?k=5bef4cb37b9cb56da30d6cf55aec37dbba0be9bdfa4ca546fa2e4512c362c8a3&o=&hp=1' },
        { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/88176942.jpg?k=69579178299da35f4a0437617e7987d0b67337f80f6824ecc5f5ed3e52d52473&o=&hp=1' }
    ];

    const handleOpen = (i)=> {
        setSlideNumber(i)
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;

        if(direction === 'l'){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type="list" />

            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=> setOpen(false)} />
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=> handleMove("l")} />
                        <div className="sliderWrapper">
                            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                        </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=> handleMove("r")} />
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve Now</button>
                    <h1 className="hotelTitle">Grand Hyatt</h1>
                    <div className="hotelAddress">
                        <FontAwesomeIcon icon={faLocationDot} style={{fontSize: '2rem'}} />
                        <span>P.O.Goa University, <br /> 403206 Bambolim, India</span>
                    </div>
                    <span className="hotelDistance">Excellent location - 500m from center</span>
                    <span className="hotelPriceHighlight">Book a stay over $150 at this property and get a free airport taxi</span>
                    <div className="hotelImages">
                        {photos.map((photo, i) => (
                            <div className="hotelImgWrapper">
                                <img onClick={()=> handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                            </div>
                        ))}
                    </div>
                    <div className="hotelDetails">
                        <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">Get the celebrity treatment with world-class service at Grand Hyatt Goa</h1>
                            <p className="hotelDesc">
                                This property is 6 minutes walk from the beach. Set in heart of Goa offering sweeping views of Bambolim Bay, Grand Hyatt welcomes guests with a 25 m outdoor pool, indoor lap pool and 7 dining options. A relaxing dinner can be arranged at the private beach area. <br /><br />
                                Choose from an array of cuisines ranging from, local Indian, Mediterranean, Asian and seafood specialties Grand Hyatt’s various restaurants. Cocktails and Wines can be enjoyed at The Capiz Bar and The Pool Bar & Grill. <br /><br />
                                Spread over 28 acres of lush greenery, the hotel is located a 30-minute drive to Thivim Railway Station and Vasco City. Dabolim Airport is a 25-minute drive away. <br /> <br />
                                Decorated in a warm palate, elegant rooms are furnished with a flat-screen cable TV and a coffee machine. Guests can also relax at the balcony. A bathtub is included in the private bathrooms. <br /><br />
                                Enjoy refreshing workouts and soothe tense muscles at The Shamana Spa and sauna facilities. Grand Hyatt also features a spacious business centre and a 24-hour front desk. <br /><br />
                                Couples particularly like the location — they rated it <b>8.7</b> for a two-person trip.</p>
                        </div>
                        <div className="hotelDetailsPrice">
                            <h1>Perfect for a 1-week stay!</h1>
                            <span>Want a great night's sleep? This hotel was highly rated for its very comfy beds.
                                Top location: Highly rated by recent guests (8.6)
                            </span>
                            <h2>
                                <b>$945</b> (9 nights)
                            </h2>
                            <button>Reserve Now </button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel