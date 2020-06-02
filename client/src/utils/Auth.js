import axios from 'axios';

export default {
    isLoggedIn: () => {
        return axios.get('/auth/success')
    },
    signUp: (email, password, userName) => {
        console.log("ARE YOU WORKING?")
        console.log(email, password, userName)
        return axios.post('/api/signup', {
            email: email,
            password: password,
            userName: userName
        }).then(res => console.log(res))
    },
    LogIn: (email, password) => {
        return axios.post('/api/login', {
            email: email,
            password: password
        })
    },
    Logout: () => axios.get('/logout')
}