import axios from 'axios';

export default {
    isLoggedIn: () => {
        axios.get('http://localhost:3001/auth/success')
    },
    signUp: (email, password, userName) => {
        axios.post('http://localhost:3001/api/signup', {
            email: email,
            password: password,
            userName: userName
        });
    }
}