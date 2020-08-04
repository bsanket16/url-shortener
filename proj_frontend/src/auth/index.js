//backend server
const API = 'http://localhost:7000'

export const userSignup = user => {
    return fetch(`${API}/api/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const userLogin = user => {
    return fetch(`${API}/api/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


//logout
export const logout = next => {
    if(typeof window !== "undefined"){
        localStorage.removeItem("jwt")
        next()

        return fetch(`${API}/api/logout`, {
            method: "GET"
        })
        .then(response => console.log('logout success'))
        .catch(err => console.log(err))
    } 
}

//authenticate
export const authenticate = (data, next) => {
    if(typeof window !== "undefined"){
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

//isAuthenticated
export const isAuthenticated = () => {
    if(typeof window == "undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false
    }
}
