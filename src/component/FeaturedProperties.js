import tajmahal from '../photos/tajmahal.jpeg'
import fairmont from '../photos/fairmont.jpeg'
import holidayinn from '../photos/holidayinn.jpeg'
import leelapalace from '../photos/leelapalace.jpeg'

function FeaturedProperties() {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src={tajmahal} alt="" className="fpImg" />
                <span className="fpName">Taj Mahal</span>
                <span className="fpCity">Mumbai</span>
                <span className="fpPrice">Starting from $200</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={fairmont} alt="" className="fpImg" />
                <span className="fpName">Fairmont</span>
                <span className="fpCity">Jaipur</span>
                <span className="fpPrice">Starting from $150</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={holidayinn} alt="" className="fpImg" />
                <span className="fpName">Holiday Inn</span>
                <span className="fpCity">Goa</span>
                <span className="fpPrice">Starting from $150</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={leelapalace} alt="" className="fpImg" />
                <span className="fpName">The Leela Palace</span>
                <span className="fpCity">Bengluru</span>
                <span className="fpPrice">Starting from $150</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProperties