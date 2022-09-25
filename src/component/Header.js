import { useState } from 'react'
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import { faBed, faCar, faMapLocationDot, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

function Header({type}) {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const navigate = useNavigate();

    const handleOption = (name, operation)=> {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = ()=> {
        navigate("/hotels", 
            {state:{destination, date, options}}
        )
    }

    return (
        <div className='header'>
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} className="headerTopIcon" />
                        <span className='fz-16'>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} className="headerTopIcon" />
                        <span className='fz-16'>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} className="headerTopIcon" />
                        <span className='fz-16'>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMapLocationDot} className="headerTopIcon" />
                        <span className='fz-16'>Attraction</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} className="headerTopIcon" />
                        <span className='fz-16'>Airport taxis</span>
                    </div>
                </div>

                {type !== 'list' &&
                <><h1 className="headerTitle">Find your next stay</h1>
                <p className="headerDesc">Search low prices on hotels, homes and much more...</p>
                <button className="headerBtn fz-12">Sign in / Register</button>
                {/* search */}
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder='where are you going?' className='headerSearchInput'
                                onChange={(e)=> setDestination(e.target.value)} />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText fz-16" onClick={() => setOpenDate(!openDate)} >
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText fz-16" onClick={()=> setOpenOptions(!openOptions)} >{`${options.adult} adult • ${options.children} children • ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText fz-16">Adult</span>
                                <div className="optionCounter">
                                    <button disabled={options.adult <= 1} className="optionCounterButton" onClick={()=> handleOption('adult', 'd')}>-</button>
                                    <span className="optionCounterNumber fz-16">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption('adult', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText fz-16">Children</span>
                                <div className="optionCounter">
                                    <button disabled={options.children <= 0} className="optionCounterButton" onClick={()=> handleOption('children', 'd')}>-</button>
                                    <span className="optionCounterNumber fz-16">{options.children}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption('children', 'i')}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText fz-16">Room</span>
                                <div className="optionCounter">
                                    <button disabled={options.room <= 1} className="optionCounterButton" onClick={()=> handleOption('room', 'd')}>-</button>
                                    <span className="optionCounterNumber fz-16">{options.room}</span>
                                    <button className="optionCounterButton" onClick={()=> handleOption('room', 'i')}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn hearderSearchBtn fz-12" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}

export default Header