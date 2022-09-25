import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import httpClient from '../httpClient'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUser = async () => {
        try {
            const resp = await httpClient.post("//localhost:5000/register", {
                email,
                password
            })
            console.log(resp.data)
            window.location.href = "/"
        } catch (error) {
            if(error.response.status === 401){
                alert("Invalid Credential")
            }
        }
    }

    return(
        <div>
            <div className="navbar-con">
                <div className="navContainer">
                    <Link to='/' className='logo'>Booking.com</Link>
                </div>
            </div>

            <div className="flexclass bg">
                <div className='loginContainer'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="text-light display-4 mt-130" style={{"font-size":"55px"}}>Bring the power of Booking hotel to your smartphone</h1>
                            </div>
                            <div className="col-md-4">
                                <div className="card mt-100">
                                    <div className="card-body d-flex flex-column">
                                        <h1 className='text-center'>Register</h1>
                                        <div className='line'></div>
                                        <form className="form d-grid">
                                            <label htmlFor="email">Email</label>
                                            <input className='form-control inputField mt-3' type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                                            <label htmlFor="password">Password</label>
                                            <input className='form-control inputField mt-3' type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                                            <button className='btn btn-primary btn-lg mt-3 fs-3' type='button' onClick={() => registerUser()} >Register</button>
                                        </form>
                                        <h5 className='mt-4'>Already have an account? <Link to="/login">Login</Link> </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register



// import React, {useState} from 'react'
// import httpClient from '../../httpClient'

// const Register = () => {

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const registerUser = async () => {

//         try {
//             const resp = await httpClient.post("//localhost:5000/register", {
//                 email,
//                 password
//             })
//             console.log(resp.data)
//             window.location.href = "/"
//         } catch (error) {
//             if(error.response.status === 401){
//                 alert("Invalid Credential")
//             }
//         }
//     }

//     return(
//         <div>
//             <h1>Create an Account</h1>
//             <form>
//                 <div>
//                     <label htmlFor="email">Email: </label>
//                     <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password: </label>
//                     <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//                 <button type='button' onClick={() => registerUser()} >Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Register