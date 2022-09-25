import gh from '../photos/grandhyat.jpeg'
import { useNavigate } from 'react-router-dom'

function SearchItem() {

    const navigate = useNavigate();

    const handleRoom = ()=> {
        navigate("/hotels/room")
    }

  return (
    <div className="searchItem">
        <img src={gh} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Grand Hyatt</h1>    
            <span className="siDistance">Travel Sustainable property</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Twin Room with Air conditioning</span>
            <span className="siFeatures">Twin Room • Swimming pool • 2 bed</span>
            <span className="siCancelOp">Breakfast included</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today.</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sidetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton" onClick={handleRoom} >Book Now</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem