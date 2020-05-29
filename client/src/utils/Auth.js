import axios from 'axios';

export default {
    isLoggedIn: () => {
        axios.get('http://localhost:3001/auth/success')
    }
}