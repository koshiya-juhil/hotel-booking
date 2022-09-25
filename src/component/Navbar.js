import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import httpClient from '../httpClient'

const Navbar = () => {

  // start for get user detail https://www.youtube.com/watch?v=sBw0O5YTT4Q&t=50s
  const [user, setUser] = useState({})
  useEffect(() => {
    (async () => {
      try{
        const resp = await httpClient.get("//localhost:5000/@me")
        console.log(resp.data)
        setUser(resp.data)
      }
      catch (error) {
        console.log("Not Authenticated")
      }
    })()
  }, [])
  console.log(user)

  const logoutUser = async () => {
    setUser(null)
    const resp = await httpClient.post("//localhost:5000/logout")
    console.log(resp.data)
    console.log(user)
    // window.location.href = "/"
  }

  // end

  return (
    <div className='navbar-con'>
        <div className="navContainer">
            <Link to='/' className='logo'>Booking.com</Link>
            <div className="navItems">
                {
                  user == null ? 
                    <>
                      <Link to="/register"><button className="navButton fz-16">Register</button></Link>
                      <Link to="/login"><button className="navButton fz-16">Login</button></Link>
                    </>
                    :
                      <div>
                        <p>Hello {user.email} </p>
                        <button className="navButton fz-16" onClick={logoutUser} >Logout</button>
                      </div>
                }
                
            </div>
        </div>
    </div>
  )
}

export default Navbar