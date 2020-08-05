import React, { useState } from 'react'

import Menu from '../core/Menu'
import Footer from '../core/Footer'
import { userSignup } from '../auth'

const Signup= () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const { username, email, password, error, success } = values

    const handleChange = name => event => {
        setValues({...values, error:false, [name]:event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        setValues({...values, error: false})
        userSignup({username, email, password})
        .then((data) => {
            if(data.error){
                setValues({...values, error:data.error, success: false})
            }
            else{
                setValues({...values,
                username: '',
                email: '',
                password: '',
                error: '',
                success: true
                })
            }
        })
    }

    const successMsg = () => {
        return (
            <>
                <div className="container alert text-center alert-success" style={{display: success ? "" : "none"}}>
                    New Account Created
                </div>
            </>
        )
    }

    const errorMsg = () => {
        return (
                <div className="container alert text-center alert-danger" style={{display: error ? "" : "none"}}>
                    { error }
                </div>
        )
    }

    const signUpForm = () => {
        return (
            <>
                <div className="container">
                    <div className="row mb-5">
                        <div className="card col-10 col-md-8 col-lg-6 p-5 m-auto shadow">
                            <div className="card-body">
                                

                                <form className="form-signup">
                                        <h1 className='display-4 mt-3 mb-5 text-dark text-center'>Signup</h1>

                                        <div className="form-label-group shadow-sm rounded">
                                                <input type="name" id="inputName" className="form-control" placeholder='Name' 
                                                required autoFocus onChange={handleChange("username")} autoComplete="new-name" value= { username } />
                                                <label htmlFor="inputName">Username</label>
                                        </div>

                                        <div className="form-label-group shadow-sm rounded">
                                                <input type="email" id="inputEmail" className="form-control" placeholder='Email' 
                                                required onChange={handleChange("email")}  autoComplete="off" value= { email } />
                                                <label htmlFor="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group shadow-sm rounded">
                                                <input type="password" id="inputPassword" className="form-control" placeholder='Password' 
                                                required onChange={handleChange("password")}  autoComplete="new-password" value={ password } />
                                                <label htmlFor="inputPassword">New password</label>
                                        </div>
                                            
                                    <button onClick={ onSubmit } href='/' className="btn btn-lg btn-block mt-4 text-white mb-3 shadow-sm rounded form-btn" type='submit'> Sign up </button>
                                            
                                    {errorMsg()}
                                    {successMsg()}    

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Menu />
            {signUpForm()}
            <Footer />
        </>
    )
}

export default Signup