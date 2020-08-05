import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import Menu from '../core/Menu'
import Footer from '../core/Footer'
import { userLogin, authenticate } from '../auth'

const Login= () => {

    const [ values, setValues ] = useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        didRedirect: false
    })

    const { email, password, error, loading, didRedirect } = values

    const handleChange = name => event => {
        setValues({ ...values, error:false, [name]:event.target.value })
    }

    const onSubmit = event => {     
        event.preventDefault()
        setValues({...values, error: false, loading: false})
        userLogin({email, password})
        .then((data) => {
            if(data.error){
                setValues({...values, error:data.error, loading: false})
            }
            else{
                authenticate(data, () => {
                    setValues({...values,
                        email: '',
                        password: '',
                        error: '',
                        loading: true,
                        didRedirect: true})
                })
            }
        })
        .catch((err) => {
            console.log('Login Request Failed')
        })
    }

    const performRedirect = () => {
        if(didRedirect){
                return <Redirect to='/dashboard' />
        }
    }

    const loadingMsg = () => {
        return (
            loading && (
                <div className="container alert alert-info">
                    Loading...
                </div>
            )
        )
    }

    const errorMsg = () => {
        return (
                <div className="container alert text-center alert-danger" style={{display: error ? "" : "none"}}>
                    { error }
                </div>
        )
    }

    const signInForm = () => {
        return (
            <>
                <Menu />

                <div className="container">
                    <div className="row mb-5">
                        <div className="card col-11 col-md-8 col-lg-6 p-5 m-auto shadow">
                            <div className="card-body">

                                <form className="form-signin" autoComplete='off'>
                                        <h1 className='display-4 mt-3 mb-5 text-dark text-center'>Login</h1>
                                        
                                        <div className="form-label-group shadow-sm rounded">
                                            <input value={ email } type="email" id="inputEmail" className="form-control" 
                                            placeholder='Email' required autoFocus onChange={ handleChange("email") } />
                                            <label htmlFor="inputEmail">Email Id</label>
                                        </div>
                                            
                                        <div className="form-label-group shadow-sm rounded">
                                            <input value={ password } type="password" id="inputPassword" className="form-control mt-1" 
                                            placeholder='Password' required onChange={ handleChange("password") } />
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>
                                            
                                    <button onClick={onSubmit} href='/' className="btn btn-lg mt-4 mb-2 btn-block text-white shadow-sm rounded form-btn" type='submit'> Log In </button>
                                            
                                    {errorMsg()}
                                    {loadingMsg()}  

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
            {signInForm()}
            {performRedirect()}
            <Footer />
        </>
    )
}

export default Login