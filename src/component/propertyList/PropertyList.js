import './propertyList.css'
import hotels from '../../photos/hotels.jpeg'
import apartments from '../../photos/apartments.jpeg'
import resorts from '../../photos/resorts.jpeg'
import villas from '../../photos/villas.jpeg'
import holidayhomes from '../../photos/holidayhomes.jpeg'

function PropertyList() {
  return (
    <div className="pList">
        <div className="pListItem">
            <img src={hotels} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>871,466 hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={apartments} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>864,236 apartments</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={resorts} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>17,949 resorts</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={villas} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>454,325 villas</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={holidayhomes} alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Holiday homes</h1>
                <h2>454,325 holiday homes</h2>
            </div>
        </div>
    </div>
  )
}

export default PropertyList