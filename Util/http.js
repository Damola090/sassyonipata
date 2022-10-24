import axios from 'axios';


const BACKEND_URL = 'http://192.168.43.145:3000/api/v1/user/login'

export async function loginSassy(email, password) {
    try {
        const response = await axios.post(BACKEND_URL, {email, password});
        console.log('POST REQUEST WAS SENT')

       console.log(response)

    } catch (err) {
        console.log(err, 'POST REQUEST FAILED')

    }

}