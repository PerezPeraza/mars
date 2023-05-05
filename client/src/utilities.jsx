import axios from 'axios';

export const signUp = async(name, email, password) => {
    let response = await axios.post('/user/signup/' , {
        'name': name,
        'email' : email,
        'password' : password
    })
    console.log(response.data.success)
    return response.data.success
}


export const logIn = async(email, password, setUser) => {
    let response = await axios.post('/user/login/', {
        'email' : email,
        'password' : password
    })

    setUser(response.data)
}

export const currUser = async() =>{
    let response = await axios.get('/user/curruser/')
    return response.data
}

export const logOut = async(setUser) => {
    let response = await axios.post('/user/logout/')
    if(response.data.logout){
        setUser(null)
    }
}

export const addToFavorites = async(user, imageTitle, date) => {
    let response = await axios.post('user/add/' , {
        'user': user,
        'title' : imageTitle,
        'date' : date
    })
    console.log(response.data.success)
    return response.data.success
}
